// Task Three

function extractValuesForKey(object, searchKey) {
  let resultMap = new Map();
  let currentPath = "";
  iterateThroughDeepObj(object, searchKey);
  function iterateThroughDeepObj(obj, searchKey) {
    Object.keys(obj).forEach((currentKey) => {
      if (currentKey === searchKey) {
        const currentPathSanitized = currentPath.split("/").length
          ? currentPath
              .split("/")
              .filter((v) => new RegExp(/^\D+$/).test(v))
              .join("/")
          : currentPath;
        resultMap.set(currentPathSanitized, obj[currentKey]);
      }
      if (typeof obj[currentKey] === "object") {
        currentPath += `${currentKey}/`;
        return iterateThroughDeepObj(obj[currentKey], searchKey);
      }
    });
    currentPath = "";
  }
  return resultMap;
}

// Point 2 of Task Three
// const obj = {
//   uuid: 1,
//   innerOne: {
//     someKey: "some text",
//   },
//   innerTwo: {
//     uuid: 2,
//     innerThree: {
//       someOtherKey: "some other text",
//       innerFour: {
//         uuid: 3,
//       },
//     },
//   },
// };

// const result2 = extractValuesForKey(
//   Object.keys(obj).map((key) => ({
//     someObject: { [key]: obj[key] },
//   })),
//   "uuid"
// );

module.exports = extractValuesForKey;
