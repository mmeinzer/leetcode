/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  for (const c of s) {
    if (open.has(c)) {
      stack.push(open.get(c));
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

const open = new Map([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);
