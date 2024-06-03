export default function updateStudentGradeByCity(arr) {
  return arr.reduce((acc, curr) => acc + curr.id, 0);
}
