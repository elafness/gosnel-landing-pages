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
   - **Proxy Status**: 🟠 **Gray (DNS Only)** - Not proxied through Cloudflare

### 2.2 vendor.gosnel.com
1. **Add custom domain**: `vendor.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `vendor`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Gray (DNS Only)** - Not proxied through Cloudflare

### 2.3 drivers.gosnel.com
1. **Add custom domain**: `drivers.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `drivers`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Gray (DNS Only)** - Not proxied through Cloudflare

### 2.4 promo.gosnel.com
1. **Add custom domain**: `promo.gosnel.com`
2. **DNS Setup**:
   - Type: `CNAME`
   - Name: `promo`
   - Target: `gosnel-landing-pages.pages.dev`
   - **Proxy Status**: 🟠 **Gray (DNS Only)** - Not proxied through Cloudflare

## 🎯 Step 3: Configure Routing (Advanced)

Since all subdomains point to the same deployment, you might want to add routing logic to serve different pages based on the domain. This would require:

1. **Add a `_redirects` file** to handle subdomain routing, or
2. **Use Cloudflare Workers** for more advanced routing

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
