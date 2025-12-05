// Cloudflare Pages Functions for subdomain routing
// This function handles routing for different subdomains

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const hostname = url.hostname;

  // Log the request for debugging
  console.log('Request hostname:', hostname);
  console.log('Request pathname:', url.pathname);

  // Route based on subdomain
  if (hostname.startsWith('drivers.')) {
    // Redirect to drivers directory
    if (url.pathname === '/') {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/drivers/'
        }
      });
    }
    // For other paths, let them pass through with the prefix
    if (!url.pathname.startsWith('/drivers/')) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `/drivers${url.pathname}`
        }
      });
    }
  } else if (hostname.startsWith('user.')) {
    if (url.pathname === '/') {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/user/'
        }
      });
    }
    if (!url.pathname.startsWith('/user/')) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `/user${url.pathname}`
        }
      });
    }
  } else if (hostname.startsWith('vendor.')) {
    if (url.pathname === '/') {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/vendor/'
        }
      });
    }
    if (!url.pathname.startsWith('/vendor/')) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `/vendor${url.pathname}`
        }
      });
    }
  } else if (hostname.startsWith('promo.')) {
    if (url.pathname === '/') {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': '/promo/'
        }
      });
    }
    if (!url.pathname.startsWith('/promo/')) {
      return new Response(null, {
        status: 302,
        headers: {
          'Location': `/promo${url.pathname}`
        }
      });
    }
  }

  // For all other cases, continue with the original request
  return context.next();
}