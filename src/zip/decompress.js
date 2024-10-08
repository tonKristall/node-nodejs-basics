import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const dirName = 'files';
  const fileName = 'fileToCompress.txt';
  const archiveName = 'archive.gz';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, dirName, fileName);
  const archivePath = path.join(__dirname, dirName, archiveName);
  const inputFileStream = createReadStream(archivePath);
  const outputFileStream = createWriteStream(filePath);
  const gunzip = zlib.createGunzip();

  pipeline(
    inputFileStream,
    gunzip,
    outputFileStream,
    (error) => {
      error && console.log(error);
    },
  );
};

await decompress();
