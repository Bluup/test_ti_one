// Task One
function sum(arg1) {
  if (typeof arg1 !== "number") {
    return arg1(0);
  }
  return function (arg2) {
    if (typeof arg2 !== "number") {
      return arg2(arg1);
    }
    return function (arg3) {
      if (typeof arg3 !== "number") {
        const allNumbers = [arg1, arg2];
        return arg3(allNumbers.reduce((prev, current) => (current += prev), 0));
      }
      return function (arg4) {
        const allNumbers = [arg1, arg2, arg3];
        return arg4(allNumbers.reduce((prev, current) => (current += prev), 0));
      };
    };
  };
}

module.exports = sum;
