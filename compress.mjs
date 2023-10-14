import imagemin from 'imagemin';
import imageminSvgo from 'imagemin-svgo';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGifsicle from 'imagemin-gifsicle';
import fs from 'fs-extra';
import path from 'path';

async function compressImages(inputDir, outputDir) {
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    if ((await fs.stat(inputPath)).isDirectory()) {
      await fs.ensureDir(outputPath);
      await compressImages(inputPath, outputPath);
    } else if (['.svg', '.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file))) {
      await imagemin([inputPath], {
        destination: outputDir,
        plugins: [
          imageminSvgo(),
          imageminPngquant({
            quality: [0.6, 0.8],
          }),
          imageminMozjpeg({
            quality: 75,
          }),
          imageminGifsicle(),
        ],
      });
    } else {
      await fs.copy(inputPath, outputPath);
    }
  }
}

compressImages('./src/images', './assets/images').catch((e) => {
  console.error(e);
});
