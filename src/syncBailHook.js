const BasicHook = require("./basicHook");

function SyncBailHook(args = []) {
  const basicHook = new BasicHook(args);
  basicHook.constructor = SyncBailHook;

  basicHook.compile = (options) => {
    const { taps } = options;
    return function call(...args) {
      const length = taps.length;
      for (let index = 0; index < length; index++) {
        const fn = taps[index];
        const res = fn(...args);
        if (res !== void 0) {
          return;
        }
      }
    };
  };
  return basicHook;
}
SyncBailHook.prototype = null;

module.exports = SyncBailHook;
