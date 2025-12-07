// Cloudflare Pages Functions for subdomain routing
// Maps subdomains to local directories:
// - drivers.gosnel.com → /drivers/
// - vendor.gosnel.com → /vendor/
// - user.gosnel.com → /user/
// - promo.gosnel.com → /promo/

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  
  // Route based on exact subdomain match
  if (hostname === 'drivers.gosnel.com') {
    const newUrl = new URL('/drivers/index.html', url.origin);
    return env.ASSETS.fetch(new Request(newUrl.toString(), request));
  }
  
  if (hostname === 'vendor.gosnel.com') {
    const newUrl = new URL('/vendor/index.html', url.origin);
    return env.ASSETS.fetch(new Request(newUrl.toString(), request));
  }
  
  if (hostname === 'user.gosnel.com') {
    const newUrl = new URL('/user/index.html', url.origin);
    return env.ASSETS.fetch(new Request(newUrl.toString(), request));
  }
  
  if (hostname === 'promo.gosnel.com') {
    const newUrl = new URL('/promo/index.html', url.origin);
    return env.ASSETS.fetch(new Request(newUrl.toString(), request));
  }

  // Default: pass through to normal asset handling
  return env.ASSETS.fetch(request);
}