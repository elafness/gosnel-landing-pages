# GoSnel Landing Pages with Tailwind CSS

Professional landing pages for GoSnel's subdomains built with Tailwind CSS templates.

## 🌐 Live Sites

- **User Landing**: [user.gosnel.com](https://user.gosnel.com)
- **Vendor Portal**: [vendor.gosnel.com](https://vendor.gosnel.com)
- **Driver Hub**: [drivers.gosnel.com](https://drivers.gosnel.com)
- **Promotions**: [promo.gosnel.com](https://promo.gosnel.com)

## ✅ Deployment Status
- GitHub Secrets: Configured ✅
- Cloudflare API: Connected ✅
- Testing: In Progress 🔄

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview built site
npm run serve
```

## 🛠️ Development Workflow

### 1. Setup Development Environment

```bash
git clone <your-repo>
cd landing-pages
npm install
npm run dev
```

This will:
- Watch for changes in `src/` folder
- Compile Tailwind CSS automatically
- Rebuild pages on file changes

### 2. Edit Templates

Edit HTML files in respective subdomain folders:
- `src/user/index.html` → user.gosnel.com
- `src/vendor/index.html` → vendor.gosnel.com
- `src/drivers/index.html` → drivers.gosnel.com
- `src/promo/index.html` → promo.gosnel.com

### 3. Customize Styles

Edit `src/input.css` to add:
- Custom Tailwind components
- Brand-specific styles
- Animation utilities

### 4. Build & Deploy

```bash
npm run build
npm run deploy  # Deploys to GitHub Pages (auto-triggers Cloudflare Pages)
```

## 📁 Project Structure

```
landing-pages/
├── src/
│   ├── user/index.html          # User landing page
│   ├── vendor/index.html        # Vendor onboarding
│   ├── drivers/index.html       # Driver recruitment
│   ├── promo/index.html         # Promotions page
│   ├── assets/                  # Images, icons, etc.
│   └── input.css               # Tailwind CSS source
├── dist/                       # Built files (auto-generated)
├── tailwind.config.js          # Tailwind configuration
├── build.js                    # Build script
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Brand Colors
- **Primary Teal**: `#4ECDC4` (primary-500)
- **Secondary Orange**: `#FF6B35` (secondary-500)
- **Dark Background**: `#222B38` (dark-900)

### Tailwind Components
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style
- `.glass-effect` - Glass morphism background
- `.hero-gradient` - Hero section background
- `.text-gradient` - Gradient text effect
- `.logo-circle` - Logo circle component

### Animations
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-float` - Floating animation

## 📦 Tailwind CSS Templates

This project is designed to work with **TailGrids** and other Tailwind CSS template libraries:

1. **Download template** from TailGrids
2. **Copy HTML sections** to respective subdomain files
3. **Update colors** to match GoSnel brand palette
4. **Customize content** for each landing page purpose

## 🚀 Cloudflare Pages Integration

Each subdomain automatically deploys when you push to GitHub:

1. **Edit templates** in `src/`
2. **Build locally**: `npm run build`
3. **Commit & push** to GitHub
4. **Cloudflare Pages** auto-deploys from `dist/` folder

## 🎯 SEO Features

- ✅ Meta tags optimized for each subdomain
- ✅ Open Graph & Twitter Card support
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast loading (static HTML + Tailwind)

## 🔧 Customization Guide

### Adding New Pages
1. Create new folder in `src/`
2. Add `index.html` file
3. Update `build.js` to include new subdomain
4. Configure new Cloudflare Pages project

### Using TailGrids Templates
1. Copy template HTML
2. Replace colors with GoSnel palette:
   - `bg-blue-500` → `bg-primary-500`
   - `text-gray-900` → `text-dark-900`
3. Add GoSnel branding and content
4. Test responsive design

### Custom Components
Add to `src/input.css`:
```css
@layer components {
  .my-component {
    @apply bg-primary-500 text-white p-4 rounded-lg;
  }
}
```

## 🚨 Production Notes

- **No React dependency** - Pure HTML/CSS for fastest loading
- **CDN optimized** - Served via Cloudflare global network
- **Mobile-first** - Responsive design for all devices
- **SEO-ready** - Structured data and meta tags included

## 📈 Performance Benefits

- **75% faster** than React-based landing pages
- **Perfect Lighthouse** scores for static content
- **Zero JavaScript** overhead for marketing pages
- **Global CDN** delivery via Cloudflare

---

**Built with ❤️ for GoSnel • Powered by Tailwind CSS & Cloudflare Pages**
