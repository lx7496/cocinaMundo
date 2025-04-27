const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "src/img/originals";
const outputFolders = {
  web: "src/img/web",
  tablet: "src/img/tablet",
  mobile: "src/img/mobile",
};

const sizes = {
  web: 1200,
  tablet: 768,
  mobile: 480,
};

if (!fs.existsSync(inputFolder)) {
  console.error("La carpeta de imágenes originales no existe.");
  process.exit(1);
}

Object.values(outputFolders).forEach((folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
});

fs.readdirSync(inputFolder).forEach((file) => {
  const inputPath = path.join(inputFolder, file);

  Object.entries(sizes).forEach(([key, width]) => {
    const outputPath = path.join(outputFolders[key], file);
    sharp(inputPath)
      .resize({ width })
      .toFile(outputPath)
      .then(() => console.log(`✓ ${file} → ${key}`))
      .catch((err) => console.error(`✗ Error en ${file}:`, err));
  });
});
