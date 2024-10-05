import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const directoryName = 'files';
  const oldFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const directoryPath = path.join(__dirname, directoryName);
  const oldFilePath = path.join(directoryPath, oldFileName);
  const newFilePath = path.join(directoryPath, newFileName);

  try {
    if (!fs.existsSync(oldFilePath) || fs.existsSync(newFilePath)) {
      throw new Error('FS operation failed');
    }

    await fs.promises.rename(oldFilePath, newFilePath);
  } catch (error) {
    console.error(error.message);
  }
};

await rename();
