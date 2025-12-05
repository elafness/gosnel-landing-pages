# Cloudflare Pages Setup for GoSnel Landing Pages

## 🚀 Step 1: Deploy to Cloudflare Pages

1. **Go to**: [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. **Click**: "Create a project" → "Connect to Git"
3. **Select Repository**: `elafness/gosnel-landing-pages`
4. **Build Configuration**:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: None needed
5. **Deploy!**

You'll get a URL like: `https://gosnel-landing-pages.pages.dev`

## 🌐 Step 2: Setup Custom Domains (4 separate steps)

### For each subdomain, you need to:

### 2.1 user.gosnel.com
1. **Cloudflare Dashboard** → Pages → Your project → Custom domains
2. **Add custom domain**: `user.gosnel.com`
3. **DNS Setup** in your domain settings:
   - Type: `CNAME`
   - Name: `user`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Orange (Proxied)** - Required for redirects to work!

### 2.2 vendor.gosnel.com
1. **Add custom domain**: `vendor.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `vendor`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Orange (Proxied)** - Required for redirects to work!

### 2.3 drivers.gosnel.com
1. **Add custom domain**: `drivers.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `drivers`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Orange (Proxied)** - Required for redirects to work!

### 2.4 promo.gosnel.com
1. **Add custom domain**: `promo.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `promo`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Orange (Proxied)** - Required for redirects to work!

## 🎯 Step 3: Configure Routing (Required for Subdomains)

**IMPORTANT**: For subdomain routing to work properly, you need a `_redirects` file:

### 3.1 The `_redirects` File
This project includes a `_redirects` file that tells Cloudflare Pages how to route subdomain requests:

```
# Route subdomain requests to their respective directories
https://drivers.gosnel.com/* https://gosnel-landing-pages.pages.dev/drivers/:splat 301!
https://user.gosnel.com/* https://gosnel-landing-pages.pages.dev/user/:splat 301!
https://vendor.gosnel.com/* https://gosnel-landing-pages.pages.dev/vendor/:splat 301!
https://promo.gosnel.com/* https://gosnel-landing-pages.pages.dev/promo/:splat 301!
```

### 3.2 DNS Configuration (UPDATED)
For each subdomain, make sure your DNS records are set up correctly in your Cloudflare dashboard:

- **Type**: `CNAME`
- **Name**: `drivers` (or user, vendor, promo)
- **Target**: `gosnel-landing-pages.pages.dev` (your Cloudflare Pages project URL)
- **Proxy Status**: 🟠 **Orange (Proxied)** - This is important for redirects to work!

### 3.3 Verify Custom Domain Setup in Cloudflare Pages
1. Go to **Cloudflare Dashboard** → **Pages** → **Your Project** → **Custom domains**
2. Make sure all 4 subdomains are added:
   - `drivers.gosnel.com`
   - `user.gosnel.com` 
   - `vendor.gosnel.com`
   - `promo.gosnel.com`
3. Each should show "Active" status

## ✅ Final Result

After setup:
- ✅ `user.gosnel.com` → User landing page
- ✅ `vendor.gosnel.com` → Vendor landing page
- ✅ `drivers.gosnel.com` → Driver landing page
- ✅ `promo.gosnel.com` → Promo landing page

## 🔄 Development Workflow

Now that landing pages are separate:

```bash
# Main GoSnel project
cd /Users/Taim/Desktop/GoSnel
git add . && git commit -m "Update main app"
git push

# Landing pages (separate)
cd /Users/Taim/Desktop/gosnel-landing-pages
# Make changes to landing pages
git add . && git commit -m "Update landing pages"
git push  # Auto-deploys via GitHub Actions
```

## 🚨 Important Notes

1. **DNS propagation** can take up to 24 hours
2. **SSL certificates** are automatically handled by Cloudflare
3. **Each subdomain needs separate DNS CNAME records**
4. **All subdomains point to the same deployment** (same GitHub repo)
5. **Proxy Status must be Orange (Proxied)** for redirects to work properly

## 🔧 Troubleshooting

### Problem: Getting 404 errors on subdomains
**Solution**: 
1. Make sure `_redirects` file exists in your deployment (check `dist/_redirects`)
2. Verify DNS records are **Orange (Proxied)**, not Gray (DNS Only)
3. Wait 5-10 minutes after deployment for changes to propagate

### Problem: Subdomain shows Cloudflare Pages default page
**Solution**:
1. Check that custom domains are added in Cloudflare Pages dashboard
2. Verify each subdomain shows "Active" status
3. Make sure DNS CNAME records point to your correct Pages project URL

### Problem: SSL certificate issues
**Solution**:
1. SSL certificates are automatic with Cloudflare
2. If you see "Your connection is not secure", wait up to 24 hours for SSL provisioning
3. Make sure Proxy Status is Orange (Proxied)

### Testing Your Setup
```bash
# Test each subdomain
curl -I https://drivers.gosnel.com/
curl -I https://user.gosnel.com/
curl -I https://vendor.gosnel.com/
curl -I https://promo.gosnel.com/
```

You should see `HTTP/2 200` responses, not `HTTP/2 404`.
