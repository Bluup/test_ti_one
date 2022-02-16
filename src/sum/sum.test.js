const sum = require("./sum");

test("no argument on call", () => {
  expect(sum((result) => result === expect(result).toBe(0)));
});

test("sum with one call", () => {
  sum(1)((result) => result === expect(result).toBe(1));
});

test("sum with 2 calls", () => {
  sum(1)(3)((result) => expect(result).toBe(4));
});

test("sum with 3 calls", () => {
  sum(1)(3)(4)((result) => expect(result).toBe(8));
});
