import { pipeline, Transform } from 'stream';
import { EOL } from 'os';

function reverseString(str) {
  return str.split('').reverse().join('');
}

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = reverseString(chunk.toString()).slice(1);
      callback(null, reversedChunk + EOL);
    },
  });

  pipeline(
    process.stdin,
    reverse,
    process.stdout,
    (error) => {
      console.log(error);
    },
  );
};

await transform();
