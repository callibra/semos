const modules = require('./modules');

// Dodavanje nov student
const addNewStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    const newStudent = {
      name: 'Petar',
      surname: 'Petrov',
      grade: 7.9,
      city: 'Skopje',
    };
    studentData.push(newStudent);
    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Nov student dodaden.');
  } catch (err) {
    console.error(err);
  }
};

addNewStudent();

// Brisenje na student
const deleteSpecificStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    let studentData = JSON.parse(students);
    const studentToDelete = 'Petar'; 
    studentData = studentData.filter(
      (student) => student.name !== studentToDelete
    );
    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Student izbrisan.');
  } catch (err) {
    console.error(err);
  }
};

deleteSpecificStudent();

// Promena na ocena
const changeGradeOfStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    let studentData = JSON.parse(students);
    const studentToChange = 'Ana'; 
    const newGrade = 9.0; 

    studentData = studentData.map((student) => {
      if (student.name.toLowerCase() === studentToChange.toLowerCase()) {
        return { ...student, grade: newGrade };
      }
      return student;
    });

    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Ocena studenta promenjena.');
  } catch (err) {
    console.error(err);
  }
};

changeGradeOfStudent();

// Lista na studenti
const readAllStudents = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    console.log(`Svi studenti su:`);
    console.log(studentData);
  } catch (err) {
    console.error(err);
  }
};

readAllStudents();
