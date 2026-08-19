/**
 * Image optimization script
 * Compresses and resizes images from src/assets → public/images
 * Converts everything to optimized JPEG/WebP with reasonable quality
 */
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const INPUT_DIR = join(__dirname, "..", "src", "assets");
const OUTPUT_DIR = join(__dirname, "..", "public", "images");

// Max width for different image categories
const configs = {
  // Hero images - max 1600px wide, quality 80
  "accueil_image.jpg": { width: 1600, quality: 80 },
  "hero-banner.jpg": { width: 1600, quality: 80 },
  // Portfolio images - max 1200px wide
  "image1.png": { width: 1200, quality: 80 },
  "image3.png": { width: 800, quality: 80 },
  "image4.png": { width: 800, quality: 80 },
  "image5.png": { width: 1200, quality: 80 },
  "image6.png": { width: 1200, quality: 80 },
  "lmp.png": { width: 1200, quality: 80 },
  // CEO / About images - max 800px wide
  "notre_ceo.jpg": { width: 800, quality: 82 },
  "ceo1.JPG": { width: 800, quality: 82 },
  "ceo2.JPG": { width: 800, quality: 82 },
  "ceo3.png": { width: 800, quality: 82 },
  // Dev illustration
  "Illustration dev.jpg": { width: 1000, quality: 80 },
};

async function optimize() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) => {
    const ext = extname(f).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const config = configs[file] || { width: 1200, quality: 80 };

    // Skip tiny placeholder files (67 bytes = broken/empty)
    const stats = await import("fs").then((fs) =>
      fs.promises.stat(inputPath)
    );
    if (stats.size < 500) {
      console.log(`⏭️  Skipping ${file} (${stats.size} bytes - placeholder)`);
      continue;
    }

    // Output as .jpg for photos
    const outputName = basename(file, extname(file)) + ".jpg";
    const outputPath = join(OUTPUT_DIR, outputName);

    try {
      const result = await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .jpeg({ quality: config.quality, mozjpeg: true })
        .toFile(outputPath);

      const inputSize = (stats.size / 1024).toFixed(0);
      const outputSize = (result.size / 1024).toFixed(0);
      const reduction = (((stats.size - result.size) / stats.size) * 100).toFixed(1);

      console.log(
        `✅ ${file} → ${outputName} | ${inputSize}KB → ${outputSize}KB (${reduction}% reduction) | ${result.width}x${result.height}`
      );
    } catch (err) {
      console.error(`❌ Failed to process ${file}:`, err.message);
    }
  }

  console.log("\n🎉 Done! Optimized images are in public/images/");
}

optimize();
