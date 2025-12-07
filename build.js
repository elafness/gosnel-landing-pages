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

  // Copy HTML files from each subdomain folder
  const subdomains = ["user", "vendor", "drivers", "promo"];

  subdomains.forEach((subdomain) => {
    const srcPath = path.join(srcDir, subdomain, "index.html");
    const distSubdirPath = path.join(distDir, subdomain);
    const distPath = path.join(distSubdirPath, "index.html");

    // Create subdomain directory in dist
    if (!fs.existsSync(distSubdirPath)) {
      fs.mkdirSync(distSubdirPath, { recursive: true });
    }

    // Copy HTML file if it exists
    if (fs.existsSync(srcPath)) {
      let htmlContent = fs.readFileSync(srcPath, "utf8");

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

  // Copy sitemap.xml if it exists
  const sitemapPath = path.join(srcDir, "sitemap.xml");
  const distSitemapPath = path.join(distDir, "sitemap.xml");

  if (fs.existsSync(sitemapPath)) {
    fs.copyFileSync(sitemapPath, distSitemapPath);
    console.log("✅ Copied sitemap.xml");
  }

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

  // Copy functions directory for Cloudflare Pages Functions
  const functionsDir = path.join(srcDir, "functions");
  const distFunctionsDir = path.join(distDir, "functions");

  if (fs.existsSync(functionsDir)) {
    if (!fs.existsSync(distFunctionsDir)) {
      fs.mkdirSync(distFunctionsDir, { recursive: true });
    }

    const entries = fs.readdirSync(functionsDir);
    entries.forEach((entry) => {
      const srcPath = path.join(functionsDir, entry);
      const destPath = path.join(distFunctionsDir, entry);
      fs.copyFileSync(srcPath, destPath);
    });
    console.log("✅ Copied functions directory");
  }

  console.log("🎉 Build complete!");
};

buildPages();
