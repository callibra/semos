const modules = require('./modules');

const addStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    studentData.push({
      name: 'Ivan',
      surname: 'Ivanov',
      grade: 8.5,
      city: 'Stip',
    });
    const studentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student added');
  } catch (err) {
    console.log(err);
  }
};

addStudent();

const deleteStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    let studentData = JSON.parse(students);
    studentData = studentData.filter(
      (student) => student.name !== 'Paul' && student.surname !== 'McCartney'
    );
    const studentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student deletion completed!');
  } catch (err) {
    console.log(err);
  }
};

deleteStudent();

const renameStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    const renameStudents = studentData.map((student) => {
      if (student.name === 'John') {
        return { ...student, name: 'Yoko' };
      }
      return student;
    });
    const studentJSON = JSON.stringify(renameStudents, null, 2);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student renamed!');
  } catch (err) {
    console.log(err);
  }
};

renameStudent();

const readStudents = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    console.log(`Students enrolled in our school are:`);
    console.log(studentData);
  } catch (err) {
    console.log(err);
  }
};

readStudents();
