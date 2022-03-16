/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map();
  s.split("").forEach((letter) => {
    counts.has(letter)
      ? counts.set(letter, counts.get(letter) + 1)
      : counts.set(letter, 1);
  });

  return !t.split("").some((letter) => {
    if (!counts.has(letter) || counts.get(letter) === 0) {
      return true;
    }

    counts.set(letter, counts.get(letter) - 1);

    return false;
  });
};
