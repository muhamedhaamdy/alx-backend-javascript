export default function cleanSet(set, str) {
  const arr = [...set];
  const res = [];

  if (str === '') {
    return '';
  }

  for (const item of arr) {
    if (item.startsWith(str)) {
      res.push(item.replace(str, ''));
    }
  }

  return res.join('-');
}
