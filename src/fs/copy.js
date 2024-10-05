import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const sourceDirName = 'files';
  const destinationDirName = 'files_copy';
  const errorMessage = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const sourceDirPath = path.join(__dirname, sourceDirName);
  const destinationDirPath = path.join(__dirname, destinationDirName);

  try {
    if (!fs.existsSync(sourceDirPath) || fs.existsSync(destinationDirPath)) {
      throw new Error(errorMessage);
    }

    await fs.promises.mkdir(destinationDirPath, { recursive: true });
    const filesList = await fs.promises.readdir(sourceDirPath, { withFileTypes: true });

    for (const file of filesList) {
      const sourcePath = path.join(sourceDirPath, file.name);
      const destinationPath = path.join(destinationDirPath, file.name);

      if (file.isDirectory()) {
        await copyDirectory(sourcePath, destinationPath);
      } else {
        await fs.promises.copyFile(sourcePath, destinationPath);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
};

const copyDirectory = async (source, destination) => {
  await fs.promises.mkdir(destination, { recursive: true });
  const filesList = await fs.promises.readdir(source, { withFileTypes: true });

  for (const file of filesList) {
    const sourcePath = path.join(source, file.name);
    const destinationPath = path.join(destination, file.name);

    if (file.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
    } else {
      await fs.promises.copyFile(sourcePath, destinationPath);
    }
  }
};

await copy();
