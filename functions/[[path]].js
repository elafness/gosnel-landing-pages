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
  
  // Handle sitemap.xml - serve unified sitemap
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
  
  // Map partner paths to partner files
  const partnerRoutes = {
    '/': '/partner-landing.html',
    '/pricing': '/partner-pricing.html',
    '/how-it-works': '/partner-how-it-works.html',
    '/why-partner': '/partner-why-partner.html',
    '/guidelines': '/partner-guidelines.html',
    '/insights': '/partner-insights.html'
  };
  
  // If path matches exactly, serve that file
  if (partnerRoutes[path]) {
    const targetFile = partnerRoutes[path];
    try {
      const request = new Request(url.origin + targetFile, { method: 'GET' });
      const response = await context.env.ASSETS.fetch(request);
      
      if (response.ok) {
        // Get the content type from the target file
        const contentType = response.headers.get('content-type') || 'text/html; charset=utf-8';
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: {
            'content-type': contentType,
            'cache-control': 'public, max-age=300'
          }
        });
      }
    } catch (error) {
      console.error(`Error fetching ${targetFile}:`, error);
    }
  }
  
  // Fallback to partner landing
  const fallbackRequest = new Request(url.origin + '/partner-landing.html', { method: 'GET' });
  const fallbackResponse = await context.env.ASSETS.fetch(fallbackRequest);
  return new Response(fallbackResponse.body, {
    status: fallbackResponse.status,
    statusText: fallbackResponse.statusText,
    headers: new Headers(fallbackResponse.headers)
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
