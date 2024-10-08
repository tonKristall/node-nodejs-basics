import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const service = (worker) => {
  return new Promise((resolve) => {
    worker.on('message', (result) => {
      resolve({ status: 'resolved', data: result });
    });

    worker.on('error', () => {
      resolve({ status: 'error', data: null });
    });
  });
};

const performCalculations = async () => {
  const initWorkerData = 10;
  const workerFileName = 'worker.js';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const workerFilePath = path.join(__dirname, workerFileName);
  const logicalCores = os.cpus().length;

  const workers = new Array(logicalCores)
    .fill(null)
    .map((_, index) => new Worker(workerFilePath, { workerData: initWorkerData + index }))
    .map(service);

  const results = await Promise.all(workers);

  console.log(results);
};

await performCalculations();
