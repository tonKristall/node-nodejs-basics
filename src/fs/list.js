import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const dirName = 'files';
  const errorMessage = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dirPath = path.join(__dirname, dirName);

  try {
    if (!fs.existsSync(dirPath)) {
      throw new Error(errorMessage);
    }

    fs.readdir(dirPath, (_, files) => {
      console.log(files);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await list();
