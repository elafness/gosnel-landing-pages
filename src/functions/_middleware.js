export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;
  
  // Map subdomain to the correct index file
  let targetFile = null;
  
  if (hostname === 'drivers.gosnel.com') {
    targetFile = '/index-drivers.html';
  } else if (hostname === 'vendor.gosnel.com') {
    targetFile = '/index-vendor.html';
  } else if (hostname === 'user.gosnel.com') {
    targetFile = '/index-user.html';
  } else if (hostname === 'promo.gosnel.com') {
    targetFile = '/index-promo.html';
  }
  
  // If subdomain matched and requesting root, serve the index file
  if (targetFile && url.pathname === '/') {
    return context.env.ASSETS.fetch(
      new Request(new URL(targetFile, url.origin).toString(), context.request)
    );
  }
  
  // Otherwise, pass through to static assets
  return context.env.ASSETS.fetch(context.request);
}
