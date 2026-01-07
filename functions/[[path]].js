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
  
  // Route to apps files in dist (Cloudflare serves from dist/)
  const partnerRoutes = {
    '/': 'apps/partner-app/index.html',
    '/pricing': 'apps/partner-app/features/pricing.html',
    '/how-it-works': 'apps/partner-app/features/how-it-works.html',
    '/why-partner': 'apps/partner-app/features/why-partner.html',
    '/guidelines': 'apps/partner-app/features/guidelines.html',
    '/insights': 'apps/partner-app/features/insights.html'
  };
  
  // Only serve exact matches from the sitemap using apps files
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
  return new Response(`Page not found: ${path}`, { 
    status: 404, 
    headers: { 'content-type': 'text/html' } 
  });
}

async function handleMainDomain(url, context) {
  const path = url.pathname;
  
  // Route to apps files in dist (Cloudflare serves from dist/)
  const userRoutes = {
    '/': 'apps/user-app/features/landing.html',
    '/pricing': 'apps/user-app/features/pricing.html',
    '/how-it-works': 'apps/user-app/features/how-it-works.html',
    '/about-us': 'apps/user-app/about.html',
    '/faq': 'apps/user-app/faq.html',
    '/food': 'apps/user-app/food.html'
  };
  
  // Only serve exact matches from sitemap using apps files
  const targetFile = userRoutes[path];
  
  if (targetFile) {
    try {
      const response = await context.env.ASSETS.fetch(`${url.origin}/${targetFile}`);
      if (response.ok) {
        return response;
      }
      console.error(`File ${targetFile} returned status: ${response.status}`);
    } catch (error) {
      console.error(`Error fetching user file ${targetFile}:`, error);
    }
  }
  
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
  
  // Return 404 for unmapped paths
  return new Response(`Page not found: ${path}`, { 
    status: 404, 
    headers: { 'content-type': 'text/html' } 
  });
}
