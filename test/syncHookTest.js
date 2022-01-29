const SyncHook = require("../src/syncHook");
const accelerate = new SyncHook(["speed"]);

// register a callback
accelerate.tap("Logger", (newSpeed) => {
  console.log(newSpeed);
});

// register a callback again

accelerate.tap("Overspeed", (newSpeed) => {
  if (newSpeed > 120) {
    console.log("Overspeed");
  }
});

// test accelerate hook
accelerate.call(1000);
accelerate.call(2000);
