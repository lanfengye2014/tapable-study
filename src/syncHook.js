const BasicHook = require("./basicHook");

function SyncHook(args = []) {
  const basicHook = new BasicHook(args);
  basicHook.constructor = SyncHook;

  basicHook.compile = (options) => {
    const { taps } = options;
    const call = (...args) => {
      const tapsLength = taps.length;
      for (let index = 0; index < tapsLength; index++) {
        const fn = taps[index];
        fn(...args);
      }
    };
    return call;
  };
  return basicHook;
}
SyncHook.prototype = null;
module.exports = SyncHook;
