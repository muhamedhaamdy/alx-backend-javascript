export default function hasValuesFromArray(set, arr) {
  let found = true;
  arr.forEach((item) => {
    if (!set.has(item)) {
      found = false;
    }
  });
  return found;
}
