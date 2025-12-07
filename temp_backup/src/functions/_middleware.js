// Cloudflare Pages Functions for subdomain routing
// Maps subdomains to local directories:
// - drivers.gosnel.com → /drivers/
// - vendor.gosnel.com → /vendor/
// - user.gosnel.com → /user/
// - promo.gosnel.com → /promo/

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  // Determine target directory based on subdomain
  let targetDir = null;
  
  if (hostname.includes('drivers.')) {
    targetDir = 'drivers';
  } else if (hostname.includes('vendor.')) {
    targetDir = 'vendor';
  } else if (hostname.includes('promo.')) {
    targetDir = 'promo';
  } else if (hostname.includes('user.')) {
    targetDir = 'user';
  }

  // If no subdomain matched, pass through unchanged
  if (!targetDir) {
    return fetch(request);
  }

  // Build rewritten path
  let newPath = pathname;
  
  if (pathname === '/' || pathname === '') {
    newPath = `/${targetDir}/`;
  } else if (!pathname.startsWith(`/${targetDir}/`)) {
    newPath = `/${targetDir}${pathname}`;
  }

  // Rewrite URL
  const rewriteUrl = new URL(url);
  rewriteUrl.pathname = newPath;

  // Fetch the rewritten path
  return fetch(rewriteUrl.toString(), request);
}