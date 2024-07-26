const fs = require('fs');

const countStudents = (path) => {
  const fileContent = fs.readFileSync(path, 'utf8');
  console.log(fileContent);
}

module.exports = countStudents;