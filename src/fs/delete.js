import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const remove = async () => {
  const directoryName = 'files';
  const fileName = 'fileToRemove.txt';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const directoryPath = path.join(__dirname, directoryName);
  const filePath = path.join(directoryPath, fileName);

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    await fs.promises.unlink(filePath);
  } catch (error) {
    console.error(error.message);
  }
};

await remove();
