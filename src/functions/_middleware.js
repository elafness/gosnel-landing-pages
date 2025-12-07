export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;
  
  // Map subdomain to the correct index file
  let targetFile = null;
  
  if (hostname.startsWith('drivers.') || hostname.includes('drivers')) {
    targetFile = '/index-drivers.html';
  } else if (hostname.startsWith('vendor.') || hostname.includes('vendor')) {
    targetFile = '/index-vendor.html';
  } else if (hostname.startsWith('user.') || hostname.includes('user')) {
    targetFile = '/index-user.html';
  } else if (hostname.startsWith('promo.') || hostname.includes('promo')) {
    targetFile = '/index-promo.html';
  }
  
  // If subdomain matched and requesting root, serve the index file
  if (targetFile && url.pathname === '/') {
    return context.env.ASSETS.fetch(
      new Request(new URL(targetFile, url.origin).toString(), context.request)
    );
  }
  
  // Default to user landing page for root of pages.dev
  if (url.pathname === '/') {
    return context.env.ASSETS.fetch(
      new Request(new URL('/index-user.html', url.origin).toString(), context.request)
    );
  }
  
  // Otherwise, pass through to static assets
  return context.env.ASSETS.fetch(context.request);
}
