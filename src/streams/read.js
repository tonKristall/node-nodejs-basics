import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const dirName = 'files';
  const fileName = 'fileToRead.txt';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);
  const readableStream = createReadStream(filePath);

  readableStream.pipe(process.stdout);
};

await read();
