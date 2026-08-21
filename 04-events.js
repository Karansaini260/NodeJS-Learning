// Exercise 4: Event emitters — the heart of Node
const EventEmitter = require("events");

class Robot extends EventEmitter {
  start() {
    console.log("Robot starting...");
    this.emit("status", "booting");
    setTimeout(() => this.emit("status", "ready"), 100);
    setTimeout(() => this.emit("status", "working"), 200);
    setTimeout(() => this.emit("status", "done"), 400);
  }
}

const robot = new Robot();
robot.on("status", (s) => console.log(`  [event] status → ${s}`));
robot.start();
