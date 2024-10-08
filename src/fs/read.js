import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const dirName = 'files';
  const fileName = 'fileToRead.txt';
  const errorMessage = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const dirPath = path.join(__dirname, dirName);
  const filePath = path.join(dirPath, fileName);

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(errorMessage);
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
      console.log(data);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await read();
