# GoSnel for Restaurants - Vendor Landing Page

**Website:** https://vendor.gosnel.com

---

## 📋 Page Overview

GoSnel is an AI-powered food discovery engine designed for restaurant owners who want to acquire new customers directly—without losing 30–50% to delivery platform commissions. The vendor landing page features a bilingual interface (English & Arabic) with a language toggle and focuses on conversion through clear value propositions, financial comparison, and a direct call-to-action.

---

## 🎯 Hero Section

### Headline
**Stop losing 30% to delivery commissions**

### Subheadline
GoSnel is an AI food discovery engine. Not a delivery app. Your customers order directly to you.

### Call-to-Action
- **Button Text:** "Start Free"
- **Link:** https://gosnel.com/vendor/signup

### Key Features (3 Bullets)
1. **No commission.** Customers order directly via WhatsApp or pickup. You keep 100%.
2. **Free Forever.** Start on the Free plan, then upgrade to Growth when you want to scale (aim for 15× ROI).
3. **New customers.** AI finds people who want exactly what you cook—not people looking for big brands.

### Hero Image
- Background image: signup/hero lifestyle photo with restaurant owner context
- Overlay: Brightened gradient (black/45 → black/35 → black/20) to keep text readable while highlighting the image

---

## 💡 You Own the Customer

### Section Headline
**You own the customer**

### Section Subheadline
Orders go directly to you. You control the relationship.

### Three-Column Feature Cards

**Card 1: You Get Their Info**
- Icon: User/profile SVG line icon
- Description: You see their name, phone, address. No middleman between you.

**Card 2: Orders Via WhatsApp**
- Icon: Chat bubble SVG line icon
- Description: Customers order to your number. You confirm. Direct relationship built.

**Card 3: 100% of Payment**
- Icon: Card/payment SVG line icon
- Description: No app fees. No delivery cuts. Money goes straight to you.

### Key Differentiator Box
Unlike delivery apps: They own the customer. You can't contact them again.

With GoSnel: You own the customer. Build repeat business.

---

## 🔄 How It Works (3 Simple Steps)

### Step 1: Customer Discovers Your Meals
AI finds people who want exactly what you cook. Not searching for brands—discovering flavors.

### Step 2: They Order Directly
Click. Order via WhatsApp or pickup. No middleman. No commission.

### Step 3: You Serve. You Keep 100%.
Full payment. New customer. Repeat business potential.

---

## 💰 How We Compare to Delivery Apps

### Comparison: Delivery App Reality vs. GoSnel Cost

**Delivery App Reality:**
- Commission: 25–35%
- Delivery fee: 5–15%
- Platform fees: 2–5%
- **Total loss: 30–50% per order**

**GoSnel Cost:**
- Monthly fee: Start Free or 99 AED (aim for 15× ROI)
- Per-order cost: 0%
- Commission: 0%
- **Break even: Just 3–4 orders**

### Real Example: 100 AED Order
- **With delivery app:** You get 50–70 AED
- **With GoSnel:** You get 100 AED

---

## 🚀 Final CTA Section

### Headline
Ready to keep 100% of your sales?

### Subheadline
Start free. Set up in minutes. No credit card required.

### Call-to-Action Button
- **Button Text:** "Start Free"
- **Link:** https://gosnel.com/vendor/signup

---

## 🌐 Bilingual Setup

### Language Toggle
- **Position:** Fixed top-center (pill-shaped nav element)
- **Options:** English | العربية
- **Behavior:** Stores user preference in localStorage; switches page content dynamically

### Arabic Version
All sections are fully localized in Modern Standard Arabic (MSA) with:
- RTL (right-to-left) text direction
- Cairo font for improved Arabic typography
- Same structure and messaging as English version

---

## 🎨 Design & Styling

### Color Scheme
- **Primary:** Teal (#4ECDC4, #1A9A93)
- **Accent Red:** #FF6B6B (for emphasis on "Stop losing 30%")
- **Text:** Dark navy (#0f172a) on light backgrounds; white on dark
- **Backgrounds:** White (default), gray-50 (light sections), teal gradient (ROI section), dark gray (#111827)

### Typography
- **Font Family:** Inter (English), Cairo (Arabic)
- **Hero H1:** 5xl–7xl, extrabold, leading-tight
- **Subheadline (H2):** xl–2xl, semibold, leading-snug
- **Section Headers:** 4xl, bold, centered
- **Body:** lg, semibold + regular for hierarchy

### Layout
- **Max-width container:** 72rem (1152px)
- **Padding:** Consistent 5rem vertical (6rem on desktop) per section
- **Grid:** Responsive 3-column on desktop, single-column on mobile
- **Icons:** 40×40px boxes with teal background, SVG line icons (22×22px, 1.8px stroke)

### Spacing & Rhythm
- Hero to sections: 5rem padding top/bottom per section
- Cards: 8px gap between grid items
- Typography: Consistent mb-4, mb-6, mb-8, mb-12 for hierarchy

---

## 📱 Responsive Breakpoints

- **Mobile (default):** Single-column, smaller text (text-2xl for subheadlines, text-lg for body)
- **Tablet (md):** 2–3 column grids activate
- **Desktop (lg):** Full 3-column layout, larger padding, max-width enforced

---

## 🔗 Links & Conversions

### Primary CTA
- Destination: https://gosnel.com/vendor/signup
- Appears: 3 times (hero, ownership section button, final CTA section)
- Button styling: Teal gradient with hover lift effect (4px translateY + enhanced shadow)

### Footer
- Includes: company footer component (TBD based on footer.html)

---

## 📊 Page Performance & SEO

### Meta Tags
- **Title:** GoSnel for Restaurants - Bring New Customers Without High Commissions
- **Description:** Stop losing 30% in commissions. GoSnel brings you new customers directly for just 99 AED/month. No delivery fees. Orders go straight to your WhatsApp or pickup.
- **Favicon:** Multiple formats (ico, png 16/32, svg)

### Open Graph / Social
- Ready for social sharing; og:title and og:description inherited from meta tags

---

## 🛠️ Technical Details

### File Location
- **Source:** `/src/vendor/vendor-landing.html`
- **Built Output:** `/dist/index-vendor.html`

### Bilingual Architecture
- Single HTML file with two `<div lang="en">` and `<div lang="ar">` sections
- CSS toggles visibility based on `body.lang-ar` class
- JavaScript handles language toggle and localStorage persistence

### Language Toggle Script
```javascript
const langButtons = document.querySelectorAll('.lang-btn');
const body = document.body;
const savedLang = localStorage.getItem('vendor-lang') || 'en';
// Sets active language on page load and switches on click
```

### CSS Classes (Reusable)
- `.container-pro` – Max-width container (72rem)
- `.section-pad` – Consistent vertical spacing
- `.icon` – SVG icon styling
- `.roi-section` – Dark text overlay for math comparison section
- `.btn-primary` – Primary CTA button with hover animation
- `.gradient-teal` – Teal gradient background

---

## 📝 Messaging Summary

### Core Value Props
1. **Direct customer relationships** – No intermediary; you own the data and relationship
2. **Cost savings** – Free plan + optional Growth plan (no mandatory monthly fees)
3. **Customer discovery** – AI finds intent-based customers, not brand-searchers
4. **100% revenue retention** – Zero commissions, zero delivery cuts

### Differentiation vs. Delivery Apps
- Talabat/Uber/Similar: Own the customer, lock you in, take 30–50% per order
- GoSnel: You own the customer, build repeat business, keep 100% revenue

### Call-to-Action Messaging
- Simple, low-friction: "Start Free"
- No credit card required
- Quick setup (minutes)
- Option to scale via Growth plan

---

## 🌍 Localization Notes

### Arabic Translation Quality
- Uses Cairo font for proper Arabic typography
- Modern Standard Arabic (MSA) for wider audience appeal
- RTL layout handled via CSS `direction: rtl` and `text-align: right`
- Icon positioning reversed for RTL (flex-direction: row-reverse)

### Metric Conversions
- Currency: AED (no conversion needed for UAE audience)
- Time: Minutes, days (no localization needed)
- Percentages: Same across both languages

---

## 📞 Contact & Next Steps

For questions about GoSnel or to get started:
- **Website:** https://vendor.gosnel.com
- **Sign-up:** https://gosnel.com/vendor/signup

---

**Last Updated:** December 20, 2025

*This document summarizes the GoSnel Vendor Landing Page content, design, and messaging. Use this as a reference for stakeholder communication, email pitches, or team onboarding.*
