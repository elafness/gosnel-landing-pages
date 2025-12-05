// Cloudflare Pages Functions for subdomain routing
// This function handles routing for different subdomains

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Log the request for debugging
  console.log('Subdomain routing - hostname:', hostname, 'pathname:', url.pathname);

  // Helper function to fetch and return content
  const fetchRoute = async (routePath) => {
    const newUrl = new URL(url);
    newUrl.pathname = routePath;
    const response = await context.env.ASSETS.fetch(newUrl.toString());
    return response;
  };

  // Route based on subdomain
  if (hostname.startsWith('drivers.')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/drivers/';
      return fetch(url.toString());
    }
    if (!url.pathname.startsWith('/drivers/')) {
      url.pathname = `/drivers${url.pathname}`;
      return fetch(url.toString());
    }
  } else if (hostname.startsWith('user.')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/user/';
      return fetch(url.toString());
    }
    if (!url.pathname.startsWith('/user/')) {
      url.pathname = `/user${url.pathname}`;
      return fetch(url.toString());
    }
  } else if (hostname.startsWith('vendor.')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/vendor/';
      return fetch(url.toString());
    }
    if (!url.pathname.startsWith('/vendor/')) {
      url.pathname = `/vendor${url.pathname}`;
      return fetch(url.toString());
    }
  } else if (hostname.startsWith('promo.')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/promo/';
      return fetch(url.toString());
    }
    if (!url.pathname.startsWith('/promo/')) {
      url.pathname = `/promo${url.pathname}`;
      return fetch(url.toString());
    }
  }

  // For all other cases, continue with the original request
  return context.next();
}