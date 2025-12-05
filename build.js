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

  console.log("🎉 Build complete!");
};

buildPages();
