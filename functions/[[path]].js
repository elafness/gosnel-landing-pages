// Cloudflare Pages Function to handle subdomain routing
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Skip function for static assets and special files - let Cloudflare handle them directly
  if (path === '/sitemap.xml' || 
      path === '/robots.txt' ||
      path.startsWith('/shared/') || 
      path.startsWith('/assets/') || 
      path.endsWith('.xml') ||
      path.endsWith('.txt') ||
      path.endsWith('.css') || 
      path.endsWith('.js') || 
      path.endsWith('.png') || 
      path.endsWith('.jpg') || 
      path.endsWith('.ico') || 
      path.endsWith('.svg') || 
      path.endsWith('.webp') ||
      path.endsWith('.webmanifest') ||
      path.endsWith('.json')) {
    // Pass through to Cloudflare's default handler (serves static files directly)
    return context.next();
  }
  
  // Get the hostname (e.g., partner.gosnel.com, gosnel.com)
  const hostname = url.hostname;
  
  // Route based on hostname
  if (hostname === 'partner.gosnel.com' || hostname === 'www.partner.gosnel.com') {
    // Serve partner content
    return handlePartnerDomain(url, context);
  } else if (hostname === 'gosnel.com' || hostname === 'www.gosnel.com') {
    // Serve user content
    return handleMainDomain(url, context);
  }
  
  // Default fallback
  return handleMainDomain(url, context);
}

async function handlePartnerDomain(url, context) {
  const path = url.pathname;
  
  // Handle robots.txt - serve main robots.txt (unified)
  if (path === '/robots.txt') {
    return context.next();
  }
  
  // Handle sitemap.xml - serve unified sitemap
  if (path === '/sitemap.xml') {
    return context.next();
  }
  
  // Map partner paths to partner files
  const partnerRoutes = {
    '/': '/partner-landing.html',
    '/pricing': '/partner-pricing.html', 
    '/how-it-works': '/partner-how-it-works.html',
    '/why-partner': '/partner-why-partner.html',
    '/guidelines': '/partner-guidelines.html',
    '/insights': '/partner-insights.html'
  };
  
  // Check for direct file match first
  if (partnerRoutes[path]) {
    // Rewrite the request URL to point to the target file
    const newUrl = new URL(url);
    newUrl.pathname = partnerRoutes[path];
    const newRequest = new Request(newUrl, context.request);
    return context.env.ASSETS.fetch(newRequest);
  }
  
  // Fallback to partner landing
  const fallbackUrl = new URL(url);
  fallbackUrl.pathname = '/partner-landing.html';
  const fallbackRequest = new Request(fallbackUrl, context.request);
  return context.env.ASSETS.fetch(fallbackRequest);
}

async function handleMainDomain(url, context) {
  const path = url.pathname;
  
  // Handle special files for main domain
  if (path === '/sitemap.xml') {
    const response = await context.env.ASSETS.fetch(new Request(`${url.origin}/sitemap.xml`));
    if (response.ok) {
      return new Response(response.body, {
        headers: {
          'content-type': 'application/xml; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        }
      });
    }
  }
  
  if (path === '/robots.txt') {
    const response = await context.env.ASSETS.fetch(new Request(`${url.origin}/robots.txt`));
    if (response.ok) {
      return new Response(response.body, {
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        }
      });
    }
  }
  
  // Let the normal _redirects and static files handle other requests
  return context.env.ASSETS.fetch(context.request);
}
