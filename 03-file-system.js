// Exercise 3: Reading & writing files (async + sync)
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "notes.txt");

// write
fs.writeFileSync(file, "Learning Node.js\n");

// read (async)
fs.readFile(file, "utf8", (err, data) => {
  if (err) throw err;
  console.log("Read:", data.trim());
});

// append
fs.appendFileSync(file, "This line was appended.\n");
console.log("notes.txt contents:", fs.readFileSync(file, "utf8").trim().split("\n"));
