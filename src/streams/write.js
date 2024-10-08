import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
  const dirName = 'files';
  const fileName = 'fileToWrite.txt';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);
  const writableStream = createWriteStream(filePath);

  process.stdin.pipe(writableStream);
};

await write();
