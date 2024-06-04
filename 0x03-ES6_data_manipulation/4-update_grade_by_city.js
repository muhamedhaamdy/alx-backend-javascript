export default function updateStudentGradeByCity(students, city, newGrades) {
  const arr = students.filter((x) => x.location === city);
  return arr.map((student) => {
    const grade = newGrades.find((x) => x.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
