# Restaurants Subdomain Setup

## Overview
Created a redirect page for `restaurants.gosnel.com` that redirects to the partner landing page while displaying a custom OG image (logo) when shared on social media.

## What Was Implemented

### 1. Redirect Page Created
**File:** `/src/restaurants/index.html`

This page includes:
- **Meta Refresh Redirect**: Automatically redirects visitors to `https://gosnel.com/partner/` immediately
- **JavaScript Fallback**: Ensures redirect works even if meta refresh is blocked
- **Custom OG Image**: Uses the GoSnel logo (`logo.png`) for social media link previews
- **User-Friendly UI**: Shows a loading spinner and redirect message during the brief redirect moment

### 2. Open Graph Meta Tags
The restaurants subdomain has unique OG tags:

```html
<meta property="og:title" content="GoSnel Restaurant Partners - Join the Future of Food Delivery">
<meta property="og:description" content="Partner with GoSnel and grow your restaurant business...">
<meta property="og:image" content="https://pub-0d4798289dad4074a3236450ba640652.r2.dev/logo.png">
<meta property="og:url" content="https://restaurants.gosnel.com">
```

**Key Difference:**
- `restaurants.gosnel.com` → Uses **logo.png** (your branding logo)
- `partner.gosnel.com` → Uses **og_image_partner.png** (partner-specific promotional image)
- `user.gosnel.com` → Uses **og_Image.png** (user-facing promotional image)

### 3. Build Configuration Updated
**File:** `/build.js` (line 42-47)

Added restaurants to the landing pages array:
```javascript
const landingPages = [
  { subdomain: "user", filename: "src/user-app/features/landing.html" },
  { subdomain: "partner", filename: "src/partner-app/index.html" },
  { subdomain: "drivers", filename: "src/drivers/drivers-landing.html" },
  { subdomain: "promo", filename: "src/promo/promo-landing.html" },
  { subdomain: "restaurants", filename: "src/restaurants/index.html" }  // NEW
];
```

### 4. Cloudflare Redirects Updated
**File:** `/src/_redirects`

Added HTTP 301 permanent redirect:
```
# Restaurants Domain - Redirect to Partner Page
https://restaurants.gosnel.com/* https://gosnel.com/partner/ 301
```

This ensures that:
- All traffic to restaurants.gosnel.com redirects to the partner page
- Search engines understand this is a permanent redirect (SEO-friendly)
- The wildcard (*) catches all paths on the subdomain

## How It Works

### For Visitors:
1. User visits `restaurants.gosnel.com`
2. Page loads briefly (showing GoSnel logo and "Redirecting..." message)
3. Browser automatically redirects to `https://gosnel.com/partner/`
4. Total redirect time: < 1 second

### For Social Media Sharing:
1. User shares `restaurants.gosnel.com` link on WhatsApp/Facebook/Twitter/LinkedIn
2. Social media platform scrapes the page for OG tags
3. Platform displays:
   - **Title:** "GoSnel Restaurant Partners - Join the Future of Food Delivery"
   - **Description:** Partner benefits text
   - **Image:** GoSnel logo (clean branding)
4. When clicked, link redirects to the partner page

## DNS Configuration Required

To make `restaurants.gosnel.com` work, you need to configure DNS in Cloudflare:

### Option 1: CNAME Record (Recommended)
```
Type: CNAME
Name: restaurants
Target: gosnel.com
Proxy: Enabled (Orange cloud)
```

### Option 2: A Record
```
Type: A
Name: restaurants
IPv4: [Your Cloudflare Pages IP]
Proxy: Enabled (Orange cloud)
```

## Cloudflare Pages Deployment

After DNS is configured, Cloudflare Pages needs to know about the subdomain:

1. Go to your Cloudflare Pages project
2. Navigate to **Settings** → **Custom domains**
3. Add `restaurants.gosnel.com` as a custom domain
4. Cloudflare will verify DNS and issue SSL certificate automatically

## Testing

### Test the Redirect:
```bash
curl -I https://restaurants.gosnel.com
# Should show: Location: https://gosnel.com/partner/
```

### Test OG Image:
1. Visit: https://www.opengraph.xyz/url/https%3A%2F%2Frestaurants.gosnel.com
2. Or use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
3. Enter: `restaurants.gosnel.com`
4. Verify the logo image appears

### Force Social Media Re-scrape:
After deployment, force platforms to refresh their cache:

**Facebook/WhatsApp:**
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter: `restaurants.gosnel.com`
3. Click "Scrape Again"

**Twitter/X:**
1. Visit: https://cards-dev.twitter.com/validator
2. Enter: `restaurants.gosnel.com`
3. Click "Preview card"

**LinkedIn:**
1. Visit: https://www.linkedin.com/post-inspector/
2. Enter: `restaurants.gosnel.com`
3. Click "Inspect"

## Files Modified

1. **Created:** `/src/restaurants/index.html` - Redirect page with logo OG image
2. **Modified:** `/build.js` - Added restaurants subdomain to build process
3. **Modified:** `/src/_redirects` - Added 301 redirect rule for Cloudflare

## Benefits of This Approach

✅ **SEO-Friendly**: 301 redirect signals to search engines this is permanent
✅ **Fast**: Meta refresh + JavaScript ensures quick redirect (< 1 second)
✅ **Branded**: Logo displays when link is shared, maintaining brand consistency
✅ **Flexible**: Easy to update OG image or redirect destination in the future
✅ **No Backend Required**: Pure static HTML solution, works on Cloudflare Pages
✅ **Cache-Safe**: OG tags are read before redirect happens, so social media platforms see the logo

## Image URLs Summary

For reference, here are all three OG images:

| Subdomain | OG Image | Purpose |
|-----------|----------|---------|
| `user.gosnel.com` | `og_Image.png` | User-facing promotional content |
| `partner.gosnel.com` | `og_image_partner.png` | Partner-specific promotional content |
| `restaurants.gosnel.com` | `logo.png` | Clean branding (logo only) |

All images hosted at: `https://pub-0d4798289dad4074a3236450ba640652.r2.dev/`

## Next Steps

1. ✅ Code implementation complete
2. ✅ Build process updated
3. ⏳ Configure DNS (CNAME: restaurants → gosnel.com)
4. ⏳ Add custom domain in Cloudflare Pages
5. ⏳ Deploy to Cloudflare (commit and push to GitHub)
6. ⏳ Test redirect functionality
7. ⏳ Clear social media cache using debugger tools

## Notes

- The redirect page will briefly flash (< 1 second) before redirecting
- This is necessary so social media crawlers can read the OG tags
- If immediate redirect is required without any page load, use Cloudflare's _redirects file only (but OG tags won't work)
- Current implementation balances user experience and social media functionality
