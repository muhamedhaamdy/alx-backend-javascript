export default function getListStudents() {
  let students = [];
  const names = ['Guillaume', 'James', 'Serena'];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  
  names.forEach((name, index) => {
    students.push({
      id: index + 1,
      firstName: name,
      location: locations[index]
    });
  });

  return students;
}
