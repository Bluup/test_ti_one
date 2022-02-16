const extractValuesForKey = require("./task3");

const obj = {
  uuid: 1,
  innerOne: {
    someKey: "some text",
  },
  innerTwo: {
    uuid: 2,
    innerThree: {
      someOtherKey: "some other text",
      innerFour: {
        uuid: 3,
      },
    },
  },
};

test("Return Map | Object given no mutated", () => {
  const response = extractValuesForKey(obj, "uuid");
  const expectedResult = new Map([
    ["", 1],
    ["innerTwo", 2],
    ["innerTwo/innerThree/innerFour", 3],
  ]);
  expect(response).toEqual(expectedResult);
});

test("Return Map | Object given mutated", () => {
  const response = extractValuesForKey(
    Object.keys(obj).map((key) => ({
      someObject: { [key]: obj[key] },
    })),
    "uuid"
  );
  const expectedResult = new Map([
    ["someObject/innerTwo", 2],
    ["someObject", 1],
    ["someObject/innerTwo/innerThree/innerFour", 3],
  ]);
  expect(response).toEqual(expectedResult);
});
