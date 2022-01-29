const SyncBailHook = require("../src/syncBailHook");
const accelerate = new SyncBailHook(["speed"]);

// register a callback
accelerate.tap("Logger", (newSpeed) => {
  console.log(newSpeed);
});

// register a callback again

accelerate.tap("Overspeed", (newSpeed) => {
  if (newSpeed > 120) {
    console.log("Overspeed");
    return new Error("Overspeed");
  }
});

accelerate.tap("Damage", (newSpeed) => {
  if (newSpeed > 130) {
    console.log("Damage");
  }
});

// test accelerate hook
accelerate.call(1000);
