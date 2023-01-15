const {Worker} = require('jest-worker');
const os = require('node:os');
const path = require('node:path');
const {performance} = require('node:perf_hooks');

const before = performance.now();
const worker = new Worker(path.join(__dirname, 'worker.js'), {
  numWorkers: os.cpus().length,
  enableWorkerThreads: process.argv[2] === '1',
});
console.log(performance.now() - before);
worker.end();
