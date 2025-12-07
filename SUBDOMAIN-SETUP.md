# Cloudflare Pages Subdomain Configuration

## Issue
The subdomains (drivers.gosnel.com, vendor.gosnel.com, user.gosnel.com, promo.gosnel.com) are returning 404 errors because they need to be configured as custom domains in Cloudflare Pages.

## Solution Steps

### 1. Configure Custom Domains in Cloudflare Pages

1. Go to **Cloudflare Pages Dashboard**
2. Select your `gosnel-landing-pages` project
3. Navigate to **Custom domains** tab
4. Add each subdomain:
   - `drivers.gosnel.com`
   - `vendor.gosnel.com`
   - `user.gosnel.com`
   - `promo.gosnel.com`

### 2. DNS Configuration

Ensure these DNS records exist in Cloudflare DNS:
```
drivers.gosnel.com  CNAME  gosnel-landing-pages.pages.dev
vendor.gosnel.com   CNAME  gosnel-landing-pages.pages.dev
user.gosnel.com     CNAME  gosnel-landing-pages.pages.dev
promo.gosnel.com    CNAME  gosnel-landing-pages.pages.dev
```

### 3. Verify Routing

The middleware (`src/functions/_middleware.js`) is correctly configured to:
- Detect subdomain from hostname
- Route to appropriate directory (drivers/, vendor/, user/, promo/)
- Serve the index.html from each directory

### 4. Test After Configuration

Once custom domains are added, test:
- https://drivers.gosnel.com/
- https://vendor.gosnel.com/
- https://user.gosnel.com/
- https://promo.gosnel.com/

## Current Status

✅ Code is correctly deployed  
✅ Middleware routing is configured  
✅ Directory structure is correct  
❌ Custom domains need to be added in Cloudflare Pages dashboard  

## Next Steps

The repository owner needs to:
1. Access Cloudflare Pages dashboard
2. Add custom domains for each subdomain
3. Verify DNS records point to the Pages deployment

Once this is done, all subdomains will work correctly.