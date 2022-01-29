const CALL_DELEGATE = function (...args) {
  this.call = this._createCall();
  return this.call(...args);
};
class BasicHook {
  constructor(...args) {
    this._args = args;
    this.taps = [];
    this.call = CALL_DELEGATE;
  }
  compile(options) {
    throw new Error("Abstract: should be overridden");
  }
  tap(name, fn) {
    this.taps.push(fn);
  }
  _createCall() {
    return this.compile({
      args: this._args,
      taps: this.taps,
    });
  }
}

module.exports = BasicHook;
