export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;
  
  // Only handle root path
  if (url.pathname !== '/') {
    return context.env.ASSETS.fetch(context.request);
  }
  
  // Map subdomain to the correct index file
  let targetFile = '/index-user.html'; // default
  
  if (hostname.includes('drivers')) {
    targetFile = '/index-drivers.html';
  } else if (hostname.includes('vendor')) {
    targetFile = '/index-vendor.html';
  } else if (hostname.includes('promo')) {
    targetFile = '/index-promo.html';
  } else if (hostname.includes('user')) {
    targetFile = '/index-user.html';
  }
  
  // Fetch the target file directly
  const assetUrl = new URL(targetFile, url.origin);
  return context.env.ASSETS.fetch(assetUrl.toString());
}
