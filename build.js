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

  // Copy assets if they exist
  const assetsDir = path.join(srcDir, "assets");
  const distAssetsDir = path.join(distDir, "assets");

  if (fs.existsSync(assetsDir)) {
    if (!fs.existsSync(distAssetsDir)) {
      fs.mkdirSync(distAssetsDir, { recursive: true });
    }

    // Copy all files from assets
    const files = fs.readdirSync(assetsDir);
    files.forEach((file) => {
      const srcFile = path.join(assetsDir, file);
      const distFile = path.join(distAssetsDir, file);
      fs.copyFileSync(srcFile, distFile);
    });

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

    // Copy all files from functions directory
    const copyDirectory = (src, dest) => {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach((entry) => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, { recursive: true });
          }
          copyDirectory(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    copyDirectory(functionsDir, distFunctionsDir);
    console.log("✅ Copied functions directory");
  }

  console.log("🎉 Build complete!");
};

buildPages();
