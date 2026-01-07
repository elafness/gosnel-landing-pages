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
  
  // Sitemap-based routing - matches exactly what's defined in src/sitemap.xml
  // These URLs are listed in the sitemap for partner.gosnel.com:
  // https://partner.gosnel.com/          -> partner-landing.html
  // https://partner.gosnel.com/pricing  -> partner-pricing.html  
  // https://partner.gosnel.com/how-it-works -> partner-how-it-works.html
  // https://partner.gosnel.com/why-partner -> partner-why-partner.html
  // https://partner.gosnel.com/guidelines -> partner-guidelines.html
  // https://partner.gosnel.com/insights -> partner-insights.html
  
  const partnerRoutes = {
    '/': 'partner-landing.html',
    '/pricing': 'partner-pricing.html', 
    '/how-it-works': 'partner-how-it-works.html',
    '/why-partner': 'partner-why-partner.html',
    '/guidelines': 'partner-guidelines.html',
    '/insights': 'partner-insights.html'
  };
  
  // Only serve exact matches from the sitemap
  const targetFile = partnerRoutes[path];
  
  if (targetFile) {
    try {
      const response = await context.env.ASSETS.fetch(`${url.origin}/${targetFile}`);
      if (response.ok) {
        return response;
      }
      console.error(`File ${targetFile} returned status: ${response.status}`);
    } catch (error) {
      console.error(`Error fetching partner file ${targetFile}:`, error);
    }
  }
  
  // Return 404 for unmapped paths to avoid confusion
  return new Response('Page not found', { 
    status: 404, 
    headers: { 'content-type': 'text/html' } 
  });
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
