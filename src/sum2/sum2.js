// Task Two

let allNumbers = [0];
function sum2(arg) {
  while (typeof arg === "number") {
    allNumbers.push(arg);
    return function (arg) {
      if (typeof arg !== "number") {
        const summatory = allNumbers.reduce(
          (prev, current) => (current += prev),
          0
        );
        allNumbers = [0];
        return arg(summatory);
      }
      return sum2(arg);
    };
  }
  const summatory = allNumbers.reduce((prev, current) => (current += prev), 0);
  allNumbers = [0];
  return arg(summatory);
}

module.exports = sum2;
