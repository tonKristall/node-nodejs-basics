import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { pipeline } from 'stream';

const compress = async () => {
  const dirName = 'files';
  const fileName = 'fileToCompress.txt';
  const archiveName = 'archive.gz';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);
  const archivePath = path.join(__dirname, dirName, archiveName);
  const inputFileStream = createReadStream(filePath);
  const outputFileStream = createWriteStream(archivePath);
  const gzip = zlib.createGzip();

  pipeline(
    inputFileStream,
    gzip,
    outputFileStream,
    (error) => {
      error && console.log(error);
    },
  );
};

await compress();
