// Cloudflare Pages Functions for subdomain routing
// This function handles routing for different subdomains

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  console.log('Subdomain routing - hostname:', hostname, 'pathname:', url.pathname);

  // Route based on subdomain
  if (hostname.includes('drivers.')) {
    if (url.pathname === '/' || url.pathname === '') {
      const driversUrl = new URL(url);
      driversUrl.pathname = '/drivers/';
      return fetch(driversUrl.toString());
    }
    if (!url.pathname.startsWith('/drivers/')) {
      const driversUrl = new URL(url);
      driversUrl.pathname = `/drivers${url.pathname}`;
      return fetch(driversUrl.toString());
    }
  } else if (hostname.includes('vendor.')) {
    if (url.pathname === '/' || url.pathname === '') {
      const vendorUrl = new URL(url);
      vendorUrl.pathname = '/vendor/';
      return fetch(vendorUrl.toString());
    }
    if (!url.pathname.startsWith('/vendor/')) {
      const vendorUrl = new URL(url);
      vendorUrl.pathname = `/vendor${url.pathname}`;
      return fetch(vendorUrl.toString());
    }
  } else if (hostname.includes('promo.')) {
    if (url.pathname === '/' || url.pathname === '') {
      const promoUrl = new URL(url);
      promoUrl.pathname = '/promo/';
      return fetch(promoUrl.toString());
    }
    if (!url.pathname.startsWith('/promo/')) {
      const promoUrl = new URL(url);
      promoUrl.pathname = `/promo${url.pathname}`;
      return fetch(promoUrl.toString());
    }
  } else if (hostname.includes('user.')) {
    if (url.pathname === '/' || url.pathname === '') {
      const userUrl = new URL(url);
      userUrl.pathname = '/user/';
      return fetch(userUrl.toString());
    }
    if (!url.pathname.startsWith('/user/')) {
      const userUrl = new URL(url);
      userUrl.pathname = `/user${url.pathname}`;
      return fetch(userUrl.toString());
    }
  }

  // For all other cases, continue with the original request
  return context.next();
}