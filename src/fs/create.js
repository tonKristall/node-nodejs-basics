import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const directoryName = 'files';
  const fileName = 'fresh.txt';
  const fileContent = 'I am fresh and young';
  const errorMessage = 'FS operation failed';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const directoryPath = path.join(__dirname, directoryName);
  const filePath = path.join(directoryPath, fileName);

  try {
    if (fs.existsSync(filePath)) {
      throw new Error(errorMessage);
    }

    fs.writeFileSync(filePath, fileContent);
  } catch (error) {
    console.error(error.message);
  }
};

await create();
