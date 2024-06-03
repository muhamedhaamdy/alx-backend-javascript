export default function getStudentsByLocation(arr, loc) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.filter((x) => x.location === loc);
}
