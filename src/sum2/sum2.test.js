const sum2 = require("./sum2");

test("no argument on call", () => {
  sum2((result) => result === expect(result).toBe(0));
});

test("sum with one call", () => {
  sum2(1)((result) => result === expect(result).toBe(1));
});

test("sum with 2 calls", () => {
  sum2(1)(3)((result) => expect(result).toBe(4));
});

test("sum with 3 calls", () => {
  sum2(1)(3)(4)((result) => expect(result).toBe(8));
});

test("sum with 6 calls", () => {
  sum2(1)(2)(3)(4)(5)(6)((result) => expect(result).toBe(21));
});
