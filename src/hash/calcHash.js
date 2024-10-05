import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const directoryName = 'files';
  const fileName = 'fileToCalculateHashFor.txt';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const directoryPath = path.join(__dirname, directoryName);
  const filePath = path.join(directoryPath, fileName);
  const stream = createReadStream(filePath);
  const hash = createHash('sha256');

  stream.on('data', chunk => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log(hexHash);
  });
};

await calculateHash();
