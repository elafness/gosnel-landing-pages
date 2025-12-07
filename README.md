# GoSnel Landing Pages

Professional landing pages for GoSnel food delivery platform subdomains.

## Overview

This repository contains the promotional landing pages for:
- **user.gosnel.com** - Customer onboarding and app download
- **vendor.gosnel.com** - Restaurant partner recruitment  
- **drivers.gosnel.com** - Driver recruitment and onboarding
- **promo.gosnel.com** - Special promotional campaigns

## Features

✅ **Bilingual Support** - English/Arabic with RTL layout  
✅ **Responsive Design** - Mobile-first Tailwind CSS  
✅ **SEO Optimized** - Proper meta tags, favicons, sitemaps  
✅ **Subdomain Routing** - Cloudflare Pages Functions middleware  
✅ **Landing Page Focus** - Pure promotional content, main functionality in main app  

## Quick Start

```bash
npm install
npm run build
npm run serve
```

## Project Structure

```
src/
├── user/index.html          # Customer landing page
├── vendor/index.html        # Restaurant landing page  
├── drivers/index.html       # Driver landing page
├── promo/index.html         # Promotional landing page
├── assets/                  # Favicons, icons, images
├── functions/               # Cloudflare Pages Functions
└── input.css               # Tailwind CSS source

References/                  # Development references (not deployed)
├── UserLanding.jsx          # Original React components  
├── VendorLanding.jsx        # for design/content reference
└── assets/                  # Source assets and icons
```

## Deployment

Automatically deployed via Cloudflare Pages on push to `main` branch.

**Live URLs:**
- https://user.gosnel.com
- https://vendor.gosnel.com  
- https://drivers.gosnel.com
- https://promo.gosnel.com

## Development

All landing pages redirect to main GoSnel app for actual functionality:
- Login buttons → `gosnel.com/user/login`, `gosnel.com/vendor/login`, etc.
- Signup buttons → `gosnel.com/user/signup`, `gosnel.com/vendor/signup`, etc.
- Footer links → Proper main app routes

## License

© 2025 GoSnel. All rights reserved.
