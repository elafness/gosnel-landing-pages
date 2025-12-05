// Cloudflare Pages Functions for subdomain routing
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;
  const pathname = url.pathname;

  console.log('[Middleware] Processing:', hostname + pathname);

  // Determine target directory based on subdomain
  let targetDir = 'user'; // default
  
  if (hostname.includes('drivers.')) {
    targetDir = 'drivers';
  } else if (hostname.includes('vendor.')) {
    targetDir = 'vendor';
  } else if (hostname.includes('promo.')) {
    targetDir = 'promo';
  } else if (hostname.includes('user.')) {
    targetDir = 'user';
  } else {
    // For pages.dev or unknown, use default
    targetDir = 'user';
  }

  console.log('[Middleware] Target directory:', targetDir);

  // Build the new URL with rewritten path
  let newPath = pathname;
  
  if (pathname === '/' || pathname === '') {
    newPath = `/${targetDir}/`;
  } else if (!pathname.startsWith(`/${targetDir}/`)) {
    newPath = `/${targetDir}${pathname}`;
  }

  console.log('[Middleware] Rewriting:', pathname, '->', newPath);

  // Create a new request with the rewritten path
  const rewriteUrl = new URL(url);
  rewriteUrl.pathname = newPath;

  // Fetch the rewritten URL
  return fetch(rewriteUrl.toString(), request);
}