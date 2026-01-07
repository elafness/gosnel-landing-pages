# ✅ Cloudflare DNS Migration Checklist

## Safe to Delete from Cloudflare

You can **safely delete** these subdomains:

- ❌ `partner.gosnel.com`
- ❌ `www.partner.gosnel.com`

**Reason:** All partner content is now at `gosnel.com/partner/*`

## Keep in Cloudflare

Keep these DNS records:

- ✅ `gosnel.com` (main domain)
- ✅ `www.gosnel.com` (www subdomain)

## Updated Sitemap

✅ **sitemap.xml** has been updated with new URLs:

### User Pages (Root Level)
- `https://gosnel.com/`
- `https://gosnel.com/pricing`
- `https://gosnel.com/how-it-works`
- `https://gosnel.com/about`
- `https://gosnel.com/faq`
- `https://gosnel.com/food`
- `https://gosnel.com/blog`

### Partner Pages (Subdirectory)
- `https://gosnel.com/partner`
- `https://gosnel.com/partner/pricing`
- `https://gosnel.com/partner/how-it-works`
- `https://gosnel.com/partner/why-partner`
- `https://gosnel.com/partner/guidelines`
- `https://gosnel.com/partner/insights`

## Google Search Console

After deployment, update Google Search Console:

1. ✅ **Add sitemap:** `https://gosnel.com/sitemap.xml`
2. ✅ **Remove old sitemap:** `https://partner.gosnel.com/sitemap.xml` (if added)
3. ✅ All URLs now under single domain for better SEO

## Deployment Steps

1. ✅ Build project: `npm run build`
2. ✅ Deploy `dist/` folder to Cloudflare Pages
3. ✅ Verify deployment at:
   - `https://gosnel.com/pricing`
   - `https://gosnel.com/partner/pricing`
4. ✅ Delete `partner.gosnel.com` DNS records from Cloudflare
5. ✅ Submit updated sitemap to Google Search Console

## Benefits

✅ **Simplified DNS** - Only one domain to manage  
✅ **Better SEO** - All content under `gosnel.com` authority  
✅ **Clean URLs** - `/pricing`, `/faq`, `/partner/pricing`  
✅ **Easier maintenance** - No subdomain complexity  

---

**Status**: Ready for deployment! 🚀  
**Date**: January 7, 2026
