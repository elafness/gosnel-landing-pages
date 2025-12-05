# GoSnel Landing Pages Setup Guide

## 🎯 Overview

This guide helps you set up professional Tailwind CSS landing pages with GitHub integration and automatic Cloudflare Pages deployment.

## 📋 Prerequisites

1. **GitHub account**
2. **Cloudflare account** with your domain
3. **Node.js 18+** installed locally
4. **TailGrids account** (optional, for premium templates)

## 🚀 Quick Setup

### Step 1: Initialize Project

```bash
cd landing-pages
npm install
npm run dev  # Start development server
```

### Step 2: Test Build

```bash
npm run build   # Build all landing pages
npm run serve   # Preview on localhost:3000
```

### Step 3: Create GitHub Repository

1. Create new repository: `gosnel-landing-pages`
2. Push this folder to GitHub:

```bash
git init
git add .
git commit -m "Initial Tailwind landing pages setup"
git branch -M main
git remote add origin https://github.com/yourusername/gosnel-landing-pages.git
git push -u origin main
```

## 🔧 Cloudflare Pages Configuration

### Step 1: Create Projects

In Cloudflare Dashboard → Pages, create these projects:

1. **gosnel-user** → Connect to GitHub repo, deploy from `dist/user/`
2. **gosnel-vendor** → Connect to GitHub repo, deploy from `dist/vendor/`
3. **gosnel-drivers** → Connect to GitHub repo, deploy from `dist/drivers/`
4. **gosnel-promo** → Connect to GitHub repo, deploy from `dist/promo/`

### Step 2: Build Settings (for each project)

```yaml
Build command: npm run build
Build output directory: dist/[subdomain]
Root directory: /
Node.js version: 18
```

### Step 3: Environment Variables

Add to each Cloudflare Pages project:
- `NODE_VERSION=18`
- `NPM_FLAGS=--production=false`

### Step 4: Custom Domains

Add custom domains to each project:
- **gosnel-user** → `user.gosnel.com`
- **gosnel-vendor** → `vendor.gosnel.com`
- **gosnel-drivers** → `drivers.gosnel.com`
- **gosnel-promo** → `promo.gosnel.com`

## 🎨 TailGrids Integration

### Step 1: Download Templates

1. Go to [TailGrids.com](https://tailgrids.com)
2. Browse **Startup/SaaS** templates
3. Download HTML templates

### Step 2: Integrate Templates

1. **Copy HTML sections** from TailGrids
2. **Replace in** respective `src/[subdomain]/index.html`
3. **Update colors** to match GoSnel brand:

```html
<!-- Replace TailGrids colors -->
bg-blue-500    → bg-primary-500
bg-gray-900    → bg-dark-900
text-blue-600  → text-primary-600
```

### Step 3: Customize Content

Replace template content with GoSnel-specific:
- **Headlines** → GoSnel value propositions
- **Features** → AI food delivery benefits
- **CTAs** → Link to gosnel.com signup/login
- **Images** → GoSnel brand assets

## 🛠️ Development Workflow

### Daily Development

```bash
# Start dev server (watches for changes)
npm run dev

# Edit files in src/
# - src/user/index.html
# - src/vendor/index.html
# - src/drivers/index.html
# - src/promo/index.html
# - src/input.css (for custom styles)

# Build and test
npm run build
npm run serve
```

### Deploy Changes

```bash
git add .
git commit -m "Update landing pages"
git push origin main
# GitHub Actions automatically deploys to Cloudflare Pages
```

## 📱 Responsive Design Testing

Test each landing page on:
- **Desktop** (1920px+)
- **Tablet** (768px - 1024px)
- **Mobile** (320px - 768px)

Use browser dev tools or:
```bash
npm run serve  # Then test on localhost:3000
```

## 🎯 SEO Optimization

Each template includes:
- ✅ **Meta titles** (unique per subdomain)
- ✅ **Meta descriptions** (150-160 characters)
- ✅ **Open Graph** tags (social sharing)
- ✅ **Schema markup** (structured data)
- ✅ **Mobile viewport** configuration

## 🚨 Production Checklist

Before going live:

- [ ] Test all internal links
- [ ] Verify mobile responsiveness
- [ ] Check page load speeds
- [ ] Validate HTML structure
- [ ] Test social media sharing
- [ ] Confirm analytics tracking
- [ ] Verify custom domain SSL

## 💡 Advanced Customizations

### Custom Components

Add to `src/input.css`:
```css
@layer components {
  .feature-card {
    @apply bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20;
  }

  .cta-hero {
    @apply bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300;
  }
}
```

### Custom Animations

```css
@keyframes slideInUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-in-up {
  animation: slideInUp 0.6s ease-out;
}
```

## 📈 Performance Optimization

- **Image optimization**: Use WebP format, max 100KB per image
- **Minification**: Tailwind auto-minifies CSS in production
- **CDN**: Cloudflare Pages provides global CDN automatically
- **Caching**: Static files cached for maximum speed

## 🔄 Maintenance

### Monthly Tasks
- Update dependencies: `npm update`
- Review analytics data
- A/B test different headlines/CTAs
- Update seasonal promotions (promo.gosnel.com)

### Content Updates
- **User landing**: Update app features, user testimonials
- **Vendor landing**: Update partner benefits, success stories
- **Driver landing**: Update earnings info, driver benefits
- **Promo landing**: Update current offers, seasonal campaigns

---

**Result**: Professional, fast-loading landing pages with automated deployment and easy content management! 🚀
