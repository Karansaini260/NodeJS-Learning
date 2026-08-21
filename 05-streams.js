// Exercise 5: Streaming large data without loading it all into memory
const fs = require("fs");
const { Transform } = require("stream");

const upper = new Transform({
  transform(chunk, _enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  },
});

const input = fs.createReadStream(__filename);
input.pipe(upper).pipe(process.stdout);
