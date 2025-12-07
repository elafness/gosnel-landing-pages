# GoSnel Complete APIs & Routes Documentation

## 📍 Base URLs
- **Frontend**: `http://localhost:5173` (dev) | `https://gosnel.com` (prod)
- **Backend API**: `http://localhost:8080` (dev) | `https://api.gosnel.com` (prod)

---

## 🔐 AUTHENTICATION ROUTES

### User Authentication
- `POST /api/auth/login/user` - User email/password login
- `POST /api/auth/signup/user` - User registration
- `POST /api/auth/logout/user` - User logout
- `POST /api/auth/refresh/user` - Refresh user token
- `POST /api/auth/google/user` - Google OAuth for users
- `POST /api/auth/forgot-password/user` - Request password reset
- `POST /api/auth/reset-password/user` - Reset password with token
- `POST /api/auth/verify-email/user` - Email verification
- `POST /api/auth/resend-otp/user` - Resend OTP code

### Vendor Authentication
- `POST /api/auth/login/vendor` - Vendor email/password login
- `POST /api/auth/signup/vendor` - Vendor registration
- `POST /api/auth/logout/vendor` - Vendor logout
- `POST /api/auth/refresh/vendor` - Refresh vendor token
- `POST /api/auth/forgot-password/vendor` - Request password reset
- `POST /api/auth/reset-password/vendor` - Reset password with token
- `POST /api/auth/verify-email/vendor` - Email verification

### Driver Authentication
- `POST /api/auth/login/driver` - Driver email/password login
- `POST /api/auth/signup/driver` - Driver registration
- `POST /api/auth/logout/driver` - Driver logout
- `POST /api/auth/refresh/driver` - Refresh driver token

### Admin Authentication
- `POST /api/auth/login/admin` - Admin email/password login
- `POST /api/auth/logout/admin` - Admin logout

### OAuth & Security
- `GET /auth/callback` - OAuth callback handler (Google, Apple, etc.)
- `POST /api/auth/google-risc/events` - Google RISC cross-account protection

---

## 👤 USER ENDPOINTS

### User Profile & Settings
- `GET /user/auth/profile` - Get user profile
- `PUT /user/auth/profile` - Update user profile
- `GET /user/auth/preferences` - Get user preferences
- `PUT /user/auth/preferences` - Update preferences
- `GET /user/auth/security` - Get security settings
- `POST /user/auth/security/2fa` - Enable 2FA
- `POST /user/auth/security/2fa/verify` - Verify 2FA code

### User Orders
- `GET /user/auth/orders` - Get user orders
- `GET /user/auth/orders/{order_id}` - Get order details
- `POST /user/auth/orders` - Create order
- `GET /api/orders/me` - Get authenticated user orders
- `GET /api/orders/{order_id}/tracking` - Track order status

### User Chat & Meals
- `POST /api/chat` - Send message to AI (guest or authenticated)
- `GET /api/chat/history` - Get chat history
- `POST /api/chat/fallback/suggest` - Fallback meal suggestions
- `GET /api/meals` - Get available meals
- `GET /api/meals/{meal_id}` - Get meal details

### User Cart
- `POST /user/auth/cart/add` - Add item to cart
- `PUT /user/auth/cart/{item_id}` - Update cart item
- `DELETE /user/auth/cart/{item_id}` - Remove from cart
- `GET /user/auth/cart` - Get cart

### User Checkout & Payments
- `POST /user/auth/checkout` - Start checkout
- `POST /user/auth/checkout/confirm` - Confirm order
- `POST /api/payments/intent` - Create payment intent (Stripe)
- `POST /api/payments/confirm` - Confirm payment

### User Location
- `POST /user/auth/location` - Save user location
- `GET /user/auth/location` - Get saved locations
- `PUT /user/auth/location/{location_id}` - Update location

---

## 🍽️ VENDOR ENDPOINTS

### Vendor Authentication & Onboarding
- `POST /vendor/auth/login` - Vendor login
- `POST /vendor/auth/signup` - Vendor signup
- `POST /vendor/auth/onboarding` - Start onboarding
- `POST /vendor/auth/stripe-onboarding` - Stripe Connect setup
- `GET /vendor/auth/profile` - Get vendor profile
- `PUT /vendor/auth/profile` - Update vendor profile

### Vendor Meals Management
- `GET /vendor/auth/meals` - Get vendor meals
- `POST /vendor/auth/meals` - Create new meal
- `PUT /vendor/auth/meals/{meal_id}` - Update meal
- `DELETE /vendor/auth/meals/{meal_id}` - Delete meal
- `POST /vendor/auth/meals/{meal_id}/image` - Upload meal image
- `POST /api/meal-images/upload` - Upload meal image to S3

### Vendor Orders
- `GET /vendor/auth/orders` - Get vendor orders
- `GET /vendor/auth/orders/{order_id}` - Get order details
- `PATCH /api/orders/{order_id}/status` - Update order status
- `POST /api/orders/{order_id}/approve` - Approve order
- `POST /api/orders/{order_id}/reject` - Reject order
- `POST /api/orders/{order_id}/cancel` - Cancel order

### Vendor Finance & Payouts
- `GET /vendor/auth/finance` - Get financial dashboard
- `GET /vendor/auth/finance/earnings` - Get earnings data
- `GET /vendor/auth/finance/payouts` - Get payout history
- `POST /vendor/auth/finance/payout-request` - Request payout
- `GET /vendor/auth/bank-details` - Get bank information
- `PUT /vendor/auth/bank-details` - Update bank details

### Vendor Documents
- `POST /vendor/auth/legal-documents/trade-license/upload` - Upload trade license
- `POST /vendor/auth/legal-documents/id-document/upload` - Upload ID document
- `GET /vendor/auth/legal-documents` - Get document status
- `DELETE /vendor/auth/legal-documents/trade-license` - Delete trade license
- `DELETE /vendor/auth/legal-documents/id-document` - Delete ID document

### Vendor Analytics
- `GET /vendor/auth/analytics` - Get vendor analytics
- `GET /vendor/auth/analytics/sales` - Get sales reports
- `GET /vendor/auth/analytics/customers` - Get customer insights

### Vendor Boost System
- `POST /vendor/auth/boost/purchase` - Purchase boost
- `POST /vendor/auth/boost/confirm-payment` - Confirm boost payment
- `GET /vendor/auth/boost/active` - Get active boosts
- `GET /vendor/auth/boost/analytics` - Get boost performance
- `GET /vendor/auth/boost/catalog` - Get available boosts

### Vendor Feedback
- `POST /vendor/auth/feedback` - Submit vendor feedback
- `GET /vendor/auth/feedback` - Get feedback history

---

## 🚗 DRIVER ENDPOINTS

### Driver Dashboard
- `GET /api/driver/{driver_id}/stats` - Get driver stats
- `PUT /api/driver/{driver_id}/availability` - Set availability status
- `GET /api/driver/{driver_id}/deliveries` - Get driver deliveries

### Driver Deliveries
- `GET /api/driver/{driver_id}/deliveries` - List deliveries
- `GET /api/driver/{driver_id}/deliveries/{delivery_id}` - Get delivery details
- `POST /api/driver/{driver_id}/deliveries/{delivery_id}/accept` - Accept delivery
- `POST /api/driver/{driver_id}/deliveries/{delivery_id}/decline` - Decline delivery
- `PATCH /api/driver/{driver_id}/deliveries/{delivery_id}/status` - Update status

### Driver Finance
- `GET /api/driver/{driver_id}/earnings` - Get earnings
- `GET /api/driver/{driver_id}/payouts` - Get payout history
- `POST /api/driver/{driver_id}/payout-request` - Request payout

### Driver Profile
- `GET /api/driver/{driver_id}/profile` - Get driver profile
- `PUT /api/driver/{driver_id}/profile` - Update profile
- `POST /api/driver/{driver_id}/documents` - Upload documents

### Driver Documents
- `POST /api/driver/{driver_id}/documents/license` - Upload driver license
- `POST /api/driver/{driver_id}/documents/insurance` - Upload insurance
- `POST /api/driver/{driver_id}/documents/vehicle-registration` - Upload vehicle registration
- `GET /api/driver/{driver_id}/documents` - Get document status

---

## 🏢 ADMIN ENDPOINTS

### Admin Dashboard
- `GET /api/admin/dashboard` - Admin dashboard stats
- `GET /api/admin/users` - List users
- `GET /api/admin/vendors` - List vendors
- `GET /api/admin/orders` - List all orders

### Admin Users Management
- `GET /api/admin/users/{user_id}` - Get user details
- `PUT /api/admin/users/{user_id}` - Update user
- `DELETE /api/admin/users/{user_id}` - Delete user
- `POST /api/admin/users/{user_id}/suspend` - Suspend user

### Admin Orders Management
- `GET /api/admin/orders` - List all orders
- `GET /api/admin/orders/{order_id}` - Get order details
- `GET /api/admin/orders/cash` - Get cash orders (Phase 17)
- `POST /api/admin/orders/{order_id}/refund` - Process refund

### Admin Payments & Disputes
- `GET /api/admin/payments` - Payment transactions
- `GET /api/admin/disputes` - Open disputes
- `POST /api/admin/disputes/{dispute_id}/resolve` - Resolve dispute

### Admin Payouts
- `GET /api/admin/payouts` - View all payouts
- `POST /api/admin/payouts/{payout_id}/approve` - Approve payout
- `POST /api/admin/payouts/{payout_id}/reject` - Reject payout
- `POST /api/admin/payouts/{payout_id}/process` - Process payout

### Admin Vendor Management
- `GET /api/admin/vendors` - List vendors
- `GET /api/admin/vendors/{vendor_id}` - Get vendor details
- `POST /api/admin/vendors/{vendor_id}/suspend` - Suspend vendor
- `POST /api/admin/vendors/{vendor_id}/verify` - Verify vendor documents

### Admin Boost Management (Phase 18)
- `GET /api/admin/boost/campaigns` - List boost campaigns
- `POST /api/admin/boost/campaigns` - Create campaign
- `PUT /api/admin/boost/campaigns/{campaign_id}` - Update campaign
- `DELETE /api/admin/boost/campaigns/{campaign_id}` - Delete campaign
- `GET /api/admin/boost/analytics` - Boost performance analytics

### Admin Financial Reports
- `GET /api/admin/financial/revenue` - Revenue reports
- `GET /api/admin/financial/expenses` - Expense reports
- `GET /api/admin/financial/commissions` - Commission breakdown
- `GET /api/admin/financial/settlements` - Settlement history

---

## 🌐 PUBLIC ENDPOINTS

### Meals & Search
- `GET /api/meals` - Get all meals
- `GET /api/meals/{meal_id}` - Get meal details
- `GET /api/meals/search` - Search meals
- `GET /api/meals/vendor/{vendor_id}` - Get vendor meals
- `GET /api/meals/trending` - Get trending meals

### Vendors & Search
- `GET /api/vendors` - List vendors
- `GET /api/vendors/{vendor_id}` - Get vendor details
- `GET /api/vendors/search` - Search vendors
- `GET /api/vendors/nearby` - Get nearby vendors

### Chat (Guest & Authenticated)
- `POST /api/chat` - Send message (works for guest & authenticated)
- `POST /api/chat/fallback/suggest` - Fallback suggestions

### System Status
- `GET /health` - Health check
- `GET /api/system/restart-state` - Backend restart status
- `GET /api/version` - Backend version info
- `GET /api/config/stripe` - Public Stripe configuration

### Subscribers (Newsletter)
- `POST /api/subscribers/subscribe` - Subscribe to newsletter
- `POST /api/subscribers/unsubscribe` - Unsubscribe from newsletter
- `GET /api/subscribers/count` - Get subscriber count
- `POST /api/whatsapp-subscribers/subscribe` - Subscribe to WhatsApp

### Feedback & Support
- `POST /api/feedback` - Submit feedback
- `GET /api/ratings` - Get ratings/reviews

---

## 🛣️ FRONTEND ROUTES (Web)

### User Routes
- `/` - Home (redirects to `/user/demo`)
- `/user/demo` - Demo chat (public, no login required)
- `/user/chat` - Legacy chat route
- `/user/login` - Login page
- `/user/signup` - Registration page
- `/user/forgot-password` - Forgot password
- `/user/reset-password` - Reset password
- `/user/auth/chat` - Authenticated chat
- `/user/auth/home` - User home/orders
- `/user/auth/profile` - User profile
- `/user/auth/settings` - User settings
- `/user/auth/preferences` - User preferences
- `/user/auth/security` - Security settings
- `/user/auth/profile/location` - Location info
- `/user/auth/orders` - Order history
- `/user/auth/cart` - Shopping cart
- `/user/auth/checkout` - Checkout
- `/user/auth/order-confirmation/:orderId` - Order confirmation

### User Info Pages
- `/user/about-us` - About us (English)
- `/user/about-us-ar` - About us (Arabic)
- `/user/faq` - FAQ (English)
- `/user/faq-ar` - FAQ (Arabic)
- `/user/help` - Help & Support (English)
- `/user/help-ar` - Help & Support (Arabic)
- `/user/help-thank-you` - Help form thank you (English)
- `/user/help-thank-you-ar` - Help form thank you (Arabic)
- `/user/how-it-works` - How it works (English)
- `/user/how-it-works-ar` - How it works (Arabic)

### Vendor Routes
- `/vendor` - Vendor portal (redirects to `/vendor/signup`)
- `/vendor/login` - Vendor login
- `/vendor/signup` - Vendor registration
- `/vendor/forgot-password` - Vendor forgot password
- `/vendor/reset-password` - Vendor reset password
- `/vendor/register` - Restaurant registration
- `/vendor/profile-completion` - Complete profile
- `/vendor/auth/dashboard` - Vendor dashboard (main)
- `/vendor/auth/meals` - Manage meals
- `/vendor/auth/add-meal` - Add new meal
- `/vendor/auth/boost-meals` - Boost meals (Phase 18)
- `/vendor/auth/orders` - Orders management
- `/vendor/auth/finance` - Finance dashboard
- `/vendor/auth/payouts` - Payouts history
- `/vendor/auth/analytics` - Analytics & insights
- `/vendor/auth/profile` - Vendor profile
- `/vendor/auth/settings` - Vendor settings
- `/vendor/auth/documents` - Document management
- `/vendor/auth/onboarding` - Document upload
- `/vendor/auth/stripe-onboarding` - Stripe setup
- `/vendor/auth/role-select` - Employee/Manager selection
- `/vendor/auth/orders-hub` - Orders hub (employee)
- `/vendor/support/onboarding` - Onboarding support

### Vendor Info Pages
- `/vendor/legal/terms` - Terms & conditions
- `/vendor/legal/privacy` - Privacy policy
- `/vendor/legal/cookies` - Cookie policy
- `/vendor/resources/guidelines` - Vendor guidelines
- `/vendor/resources/faq` - FAQ
- `/vendor/resources/analytics` - Analytics guide
- `/vendor/resources/about-us` - About us
- `/vendor/marketing/why-partner` - Why partner with GoSnel
- `/vendor/marketing/how-it-works` - How it works
- `/vendor/contact` - Contact form
- `/vendor/contact/thank-you` - Contact thank you

### Driver Routes
- `/driver` - Driver portal (redirects to `/driver/login`)
- `/driver/login` - Driver login
- `/driver/signup` - Driver registration
- `/driver/onboarding` - Driver onboarding
- `/driver/auth/dashboard` - Driver dashboard
- `/driver/auth/deliveries` - Delivery history
- `/driver/auth/finance` - Finance dashboard
- `/driver/auth/payouts` - Payouts history
- `/driver/auth/profile` - Driver profile
- `/driver/auth/settings` - Driver settings

### Admin Routes
- `/admin` - Admin portal (redirects to `/admin/login`)
- `/admin/login` - Admin login
- `/admin/directs` - Admin directs
- `/admin/dashboard/*` - Admin dashboard (all tabs)

### Legal Pages
- `/user/legal/terms` - Terms & conditions
- `/user/legal/privacy` - Privacy policy
- `/user/legal/cookies` - Cookie policy

### Utility Routes
- `/auth/callback` - OAuth callback
- `/auth/error` - OAuth error page
- `/coming-soon` - Coming soon page
- `/gpt-test` - GPT test component (dev)
- `/geolocation-demo` - Geolocation demo (dev)

### Home Kitchen Routes
- `/home/kitchen-signup` - Home kitchen signup
- `/home/dashboard` - Home kitchen dashboard
- `/home/packaging-request` - Packaging request form
- `/home/delivery-request` - Delivery request form

---

## 🔄 FRONTEND TO BACKEND FLOW EXAMPLES

### User Login Flow
```
POST /user/login → Frontend → POST /api/auth/login/user → Backend
Response: { access_token, user_info }
Store: localStorage['user_token'], localStorage['user_info']
Redirect: → /user/auth/chat
```

### User Chat Flow
```
1. GET /user/demo → Frontend (guest chat, no auth)
   - OR GET /user/auth/chat → Frontend (authenticated)

2. POST /api/chat → Backend (payload includes messages history)
   Response: { response: "AI suggestion..." }

3. Fallback: POST /api/chat/fallback/suggest
   (Template-based when GPT fails)
```

### Vendor Order Flow
```
1. GET /vendor/auth/orders → Frontend
   (via /vendor/auth/dashboard tab switching)

2. Backend: GET /vendor/auth/orders
   Response: [Order1, Order2, ...]

3. Vendor accepts/rejects:
   POST /api/orders/{order_id}/approve
   or
   POST /api/orders/{order_id}/reject
```

### Payment Flow
```
1. User goes to: /user/auth/checkout
2. Frontend creates payment intent: POST /api/payments/intent
3. Response includes clientSecret for Stripe
4. Frontend collects payment via Stripe.js
5. Frontend confirms: POST /api/payments/confirm
6. Backend processes and updates order status
7. Redirect to /user/auth/order-confirmation/{orderId}
```

---

## 📱 FOOTER & LEGAL REDIRECTS

### User Footer Links
- `/user/about-us` - About us page
- `/user/faq` - FAQ
- `/user/help` - Help & Support
- `/user/how-it-works` - How GoSnel works
- `/user/legal/terms` - Terms & Conditions
- `/user/legal/privacy` - Privacy Policy
- `/user/legal/cookies` - Cookie Policy
- `/auth/callback` - OAuth integration

### Vendor Footer Links
- `/vendor/resources/about-us` - About us
- `/vendor/resources/guidelines` - Vendor guidelines
- `/vendor/resources/faq` - FAQ
- `/vendor/resources/analytics` - Analytics guide
- `/vendor/legal/terms` - Terms & Conditions
- `/vendor/legal/privacy` - Privacy Policy
- `/vendor/legal/cookies` - Cookie Policy
- `/vendor/contact` - Contact form

### Driver Footer Links
- `/driver/auth/dashboard` - Dashboard
- `/driver/auth/profile` - Profile
- (Add more as needed for driver app)

---

## 🔑 API KEY & AUTHENTICATION HEADERS

All authenticated requests require:
```
Authorization: Bearer {access_token}
Content-Type: application/json
```

### Token Storage
- **User**: `localStorage['user_token']`, `localStorage['user_info']`
- **Vendor**: `localStorage['vendor_token']`, `localStorage['vendor_info']`
- **Driver**: `localStorage['driver_token']`, `localStorage['driver_info']`
- **Admin**: `localStorage['admin_token']`, `localStorage['admin_info']`

---

## 📊 KEY NOTES

1. **Standardized Endpoints**: All platforms (web, mobile, backend) use consistent endpoint patterns
2. **Real Data Only**: All endpoints use real database queries, never mock/placeholder data
3. **Production Grade**: All endpoints built for deployment, no temporary solutions
4. **Fallback Support**: Chat system always has fallback when GPT/APIs fail
5. **CORS Enabled**: All endpoints support cross-origin requests for frontend consumption
6. **Pagination**: List endpoints support `skip` and `limit` query parameters
7. **Filtering**: Search endpoints support `q` query parameter

---

**Last Updated**: December 5, 2025
**Version**: 1.0 - Complete API Documentation
