/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const c of s) {
    // can always open a new bracket
    if (open.has(c)) {
      stack.push(c);
    } else {
      const maybeOpen = stack.pop();
      if (!open.has(maybeOpen)) {
        return false;
      } else {
        const closeChar = open.get(maybeOpen);
        if (closeChar !== c) {
          return false;
        }
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

const open = new Map([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);
