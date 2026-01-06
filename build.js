const fs = require("fs");
const path = require("path");

// Build script to copy HTML files and process assets
const buildPages = () => {
  const srcDir = path.join(__dirname, "src");
  const distDir = path.join(__dirname, "dist");

  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Function to process HTML includes
  const processIncludes = (htmlContent, basePath = srcDir) => {
    // Replace <!--#include file="path" --> with actual file content
    const includeRegex = /<!--\s*#include\s+file="([^"]+)"\s*-->/g;
    return htmlContent.replace(includeRegex, (match, filePath) => {
      // Try multiple possible paths for includes
      const possiblePaths = [
        path.join(basePath, filePath), // Original path relative to base
        path.join(__dirname, filePath), // Relative to project root
        path.join(__dirname, "apps", filePath), // In apps directory
        path.join(__dirname, "shared", filePath), // In shared directory
        path.join(srcDir, filePath) // In src directory
      ];
      
      for (const includePath of possiblePaths) {
        if (fs.existsSync(includePath)) {
          return fs.readFileSync(includePath, "utf8");
        }
      }
      
      console.warn(`⚠️  Include file not found: ${filePath}`);
      return `<!-- Include not found: ${filePath} -->`;
    });
  };

  // Landing page files configuration
  const landingPages = [
    { subdomain: "user", filename: "apps/user-app/features/landing.html" },
    { subdomain: "vendor", filename: "apps/partner-app/features/landing.html" },
    { subdomain: "drivers", filename: "src/drivers/drivers-landing.html" },
    { subdomain: "promo", filename: "src/promo/promo-landing.html" }
  ];

  landingPages.forEach(({ subdomain, filename }) => {
    const srcPath = path.join(__dirname, filename); // Use project root instead of srcDir
    // Build landing pages at root level with subdomain-specific names
    const distPath = path.join(distDir, `index-${subdomain}.html`);

    // Copy HTML file if it exists
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");

      // Process includes first
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);

      // Replace CSS path to point to the compiled Tailwind CSS
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "../output.css"
      );

      fs.writeFileSync(distPath, htmlContent);
      console.log(`✅ Built ${subdomain}.gosnel.com`);
      
      // Also copy to root level as index-{subdomain}.html for redirects
      const rootIndexPath = path.join(distDir, `index-${subdomain}.html`);
      // For root level, CSS path needs to be /output.css
      let rootHtmlContent = fs.readFileSync(srcPath, "utf8");
      
      // Process includes for root version too
      const rootFileDir = path.dirname(srcPath);
      rootHtmlContent = processIncludes(rootHtmlContent, rootFileDir);
      rootHtmlContent = rootHtmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      rootHtmlContent = rootHtmlContent.replace(
        /href="\/output\.css"/g,
        'href="/output.css"'
      );
      fs.writeFileSync(rootIndexPath, rootHtmlContent);
    } else {
      console.log(`⚠️  No index.html found for ${subdomain}`);
    }
  });

  // Create index.html files in subdirectories that redirect to the main landing pages
  landingPages.forEach(({ subdomain, filename }) => {
    const srcPath = path.join(srcDir, filename);
    const distSubdomainDir = path.join(distDir, subdomain);
    const distIndexPath = path.join(distSubdomainDir, 'index.html');

    if (fs.existsSync(srcPath)) {
      // Ensure subdomain directory exists
      if (!fs.existsSync(distSubdomainDir)) {
        fs.mkdirSync(distSubdomainDir, { recursive: true });
      }

      // Copy landing page content as index.html in subdirectory
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const subFileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, subFileDir);
      
      // Fix CSS paths for subdirectory access
      htmlContent = htmlContent.replace(
        /\.\.\/\.\.\/dist\/output\.css/g,
        "/output.css"
      );
      htmlContent = htmlContent.replace(
        /href="\/output\.css"/g,
        'href="/output.css"'
      );
      
      fs.writeFileSync(distIndexPath, htmlContent);
      console.log(`✅ Created ${subdomain}/index.html`);
    }
  });

  // Copy root index.html for routing
  const rootIndexPath = path.join(srcDir, "index.html");
  const distRootIndexPath = path.join(distDir, "index.html");

  if (fs.existsSync(rootIndexPath)) {
    fs.copyFileSync(rootIndexPath, distRootIndexPath);
    console.log("✅ Copied root index.html for routing");
  }

  // Copy robots.txt if it exists
  const robotsPath = path.join(srcDir, "robots.txt");
  const distRobotsPath = path.join(distDir, "robots.txt");

  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, distRobotsPath);
    console.log("✅ Copied robots.txt");
  }

  // Note: Main sitemap.xml is handled by the main app, not landing pages

  // Copy subdomain-specific sitemaps
  const vendorSitemapPath = path.join(srcDir, "vendor-sitemap.xml");
  const distVendorSitemapPath = path.join(distDir, "vendor-sitemap.xml");

  if (fs.existsSync(vendorSitemapPath)) {
    fs.copyFileSync(vendorSitemapPath, distVendorSitemapPath);
    console.log("✅ Copied vendor-sitemap.xml");
  }

  const userSitemapPath = path.join(srcDir, "user-sitemap.xml");
  const distUserSitemapPath = path.join(distDir, "user-sitemap.xml");

  if (fs.existsSync(userSitemapPath)) {
    fs.copyFileSync(userSitemapPath, distUserSitemapPath);
    console.log("✅ Copied user-sitemap.xml");
  }

  // Copy drivers sitemap
  const driversSitemapPath = path.join(srcDir, "drivers-sitemap.xml");
  const distDriversSitemapPath = path.join(distDir, "drivers-sitemap.xml");

  if (fs.existsSync(driversSitemapPath)) {
    fs.copyFileSync(driversSitemapPath, distDriversSitemapPath);
    console.log("✅ Copied drivers-sitemap.xml");
  }

  // Copy promo sitemap
  const promoSitemapPath = path.join(srcDir, "promo-sitemap.xml");
  const distPromoSitemapPath = path.join(distDir, "promo-sitemap.xml");

  if (fs.existsSync(promoSitemapPath)) {
    fs.copyFileSync(promoSitemapPath, distPromoSitemapPath);
    console.log("✅ Copied promo-sitemap.xml");
  }

  // Copy sitemaps to subdomain directories for direct access
  const sitemapMappings = [
    { src: distVendorSitemapPath, dest: path.join(distDir, "vendor", "sitemap.xml") },
    { src: distUserSitemapPath, dest: path.join(distDir, "user", "sitemap.xml") },
    { src: distDriversSitemapPath, dest: path.join(distDir, "drivers", "sitemap.xml") },
    { src: distPromoSitemapPath, dest: path.join(distDir, "promo", "sitemap.xml") }
  ];

  sitemapMappings.forEach(({ src, dest }) => {
    if (fs.existsSync(src)) {
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(src, dest);
    }
  });
  console.log("✅ Copied sitemaps to subdomain directories");

    // Copy subdirectory static pages (user, vendor, footer, etc.) with include processing
  const subdomains = ['user', 'vendor', 'drivers', 'promo', 'footer'];
  
  subdomains.forEach(subdomain => {
    const srcSubdomainDir = path.join(srcDir, subdomain);
    const distSubdomainDir = path.join(distDir, subdomain);

    if (fs.existsSync(srcSubdomainDir)) {
      // Recursive copy function with HTML processing
      const copyDirectoryRecursive = (src, dest) => {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        const entries = fs.readdirSync(src, { withFileTypes: true });
        entries.forEach((entry) => {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          
          // Skip landing page files since they're handled separately
          if (entry.name.includes('-landing.html')) {
            return;
          }
          
          if (entry.isDirectory()) {
            copyDirectoryRecursive(srcPath, destPath);
          } else if (entry.name.endsWith('.html')) {
            // Process HTML files with includes
            let htmlContent = fs.readFileSync(srcPath, "utf8");
            htmlContent = processIncludes(htmlContent);
            fs.writeFileSync(destPath, htmlContent);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        });
      };

      copyDirectoryRecursive(srcSubdomainDir, distSubdomainDir);
    }
  });
  
  console.log("✅ Copied subdirectory pages");

  // Create root-level vendor static pages with vendor- prefix ONLY
  const vendorPages = ['vendor-how-it-works', 'vendor-why-partner', 'vendor-guidelines', 'vendor-insights', 'vendor-faq', 'vendor-pricing'];
  vendorPages.forEach(pageName => {
    const srcPath = path.join(srcDir, 'vendor', `${pageName}.html`);
    const distPath = path.join(distDir, `${pageName}.html`);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      fs.writeFileSync(distPath, htmlContent);
    }
  });

  // NOTE: User pages are NOT created at root level to prevent cross-subdomain access
  // User pages should only be accessible through user.gosnel.com subdomain

  // Create root-level footer pages (universal pages)
  const footerPages = ['about-us', 'legal'];
  footerPages.forEach(pageName => {
    const srcPath = path.join(srcDir, 'footer', `${pageName}.html`);
    const distPath = path.join(distDir, `${pageName}.html`);
    
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      htmlContent = processIncludes(htmlContent);
      fs.writeFileSync(distPath, htmlContent);
    }
  });
  
  console.log("✅ Created prefixed subdomain pages");

  // Copy assets if they exist (recursively)
  const assetsDir = path.join(srcDir, "assets");
  const distAssetsDir = path.join(distDir, "assets");

  if (fs.existsSync(assetsDir)) {
    // Recursive copy function
    const copyDirectoryRecursive = (src, dest) => {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
          copyDirectoryRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    copyDirectoryRecursive(assetsDir, distAssetsDir);
    console.log("✅ Copied assets");
  }

  // Copy _redirects file for Cloudflare Pages routing
  const redirectsPath = path.join(srcDir, "_redirects");
  const distRedirectsPath = path.join(distDir, "_redirects");

  if (fs.existsSync(redirectsPath)) {
    fs.copyFileSync(redirectsPath, distRedirectsPath);
    console.log("✅ Copied _redirects file");
  }

  // Copy _routes.json file for Cloudflare Pages Functions routing
  const routesPath = path.join(srcDir, "_routes.json");
  const distRoutesPath = path.join(distDir, "_routes.json");

  if (fs.existsSync(routesPath)) {
    fs.copyFileSync(routesPath, distRoutesPath);
    console.log("✅ Copied _routes.json file");
  }

  // Copy _headers file for Cloudflare Pages headers
  const headersPath = path.join(srcDir, "_headers");
  const distHeadersPath = path.join(distDir, "_headers");

  if (fs.existsSync(headersPath)) {
    fs.copyFileSync(headersPath, distHeadersPath);
    console.log("✅ Copied _headers file");
  }

  // Create localhost development files for 404-free routing
  const localhostFiles = [
    { src: "vendor-why-partner.html", dest: "why-partner.html" },
    { src: "vendor-guidelines.html", dest: "guidelines.html" },
    { src: "vendor-insights.html", dest: "insights.html" }
  ];

  localhostFiles.forEach(({ src, dest }) => {
    const srcPath = path.join(distDir, src);
    const destPath = path.join(distDir, dest);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
  console.log("✅ Created localhost development files");

  // ============================================
  // SOLID SOLUTION: Copy HTML files with clean names
  // ============================================
  // Copy app files to root level with clean names to avoid exposing /apps/* paths
  
  // User app files (for gosnel.com)
  const userAppFiles = [
    { src: "apps/user-app/features/landing.html", dest: "user-landing.html" },
    { src: "apps/user-app/features/pricing.html", dest: "user-pricing.html" },
    { src: "apps/user-app/features/how-it-works.html", dest: "user-how-it-works.html" },
    { src: "apps/user-app/about.html", dest: "user-about.html" },
    { src: "apps/user-app/faq.html", dest: "user-faq.html" },
    { src: "apps/user-app/food.html", dest: "user-food.html" }
  ];

  // Partner app files (for partner.gosnel.com)
  const partnerAppFiles = [
    { src: "apps/partner-app/index.html", dest: "partner-landing.html" },
    { src: "apps/partner-app/features/pricing.html", dest: "partner-pricing.html" },
    { src: "apps/partner-app/features/how-it-works.html", dest: "partner-how-it-works.html" },
    { src: "apps/partner-app/features/why-partner.html", dest: "partner-why-partner.html" },
    { src: "apps/partner-app/features/guidelines.html", dest: "partner-guidelines.html" },
    { src: "apps/partner-app/features/insights.html", dest: "partner-insights.html" }
  ];

  // Copy user app files
  userAppFiles.forEach(({ src, dest }) => {
    const srcPath = path.join(__dirname, src);
    const destPath = path.join(distDir, dest);
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);
      
      // Fix CSS and asset paths for root level
      htmlContent = htmlContent.replace(/href="\/shared\/styles\/output\.css"/g, 'href="/shared/styles/output.css"');
      htmlContent = htmlContent.replace(/\/shared\/assets\//g, '/shared/assets/');
      
      fs.writeFileSync(destPath, htmlContent);
      console.log(`✅ Copied ${src} to ${dest}`);
    }
  });

  // Copy partner app files  
  partnerAppFiles.forEach(({ src, dest }) => {
    const srcPath = path.join(__dirname, src);
    const destPath = path.join(distDir, dest);
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");
      const fileDir = path.dirname(srcPath);
      htmlContent = processIncludes(htmlContent, fileDir);
      
      // Fix CSS and asset paths for root level
      htmlContent = htmlContent.replace(/href="\/shared\/styles\/output\.css"/g, 'href="/shared/styles/output.css"');
      htmlContent = htmlContent.replace(/\/shared\/assets\//g, '/shared/assets/');
      
      fs.writeFileSync(destPath, htmlContent);
      console.log(`✅ Copied ${src} to ${dest}`);
    }
  });

  // Copy apps and shared directories to dist for deployment
  const appsSourcePath = path.join(__dirname, "apps");
  const appsDestPath = path.join(distDir, "apps");
  
  if (fs.existsSync(appsSourcePath)) {
    // Remove existing apps directory if it exists
    if (fs.existsSync(appsDestPath)) {
      fs.rmSync(appsDestPath, { recursive: true, force: true });
    }
    // Copy fresh apps directory
    fs.cpSync(appsSourcePath, appsDestPath, { recursive: true });
    console.log("✅ Copied apps directory");
  }

  const sharedSourcePath = path.join(__dirname, "shared");
  const sharedDestPath = path.join(distDir, "shared");
  
  if (fs.existsSync(sharedSourcePath)) {
    // Remove existing shared directory if it exists
    if (fs.existsSync(sharedDestPath)) {
      fs.rmSync(sharedDestPath, { recursive: true, force: true });
    }
    // Copy fresh shared directory
    fs.cpSync(sharedSourcePath, sharedDestPath, { recursive: true });
    console.log("✅ Copied shared directory");
  }

  console.log("🎉 Build complete!");
};

buildPages();
