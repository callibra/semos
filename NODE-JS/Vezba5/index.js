const modules = require('./modules');

// Dodavanje nov student
const addNewStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    const newStudent = {
      ime: 'Petar',
      prezime: 'Petrov',
      ocena: 7.9,
      grad: 'Skopje',
    };
    studentData.push(newStudent);
    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Noviot student e dodaden.');
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
    const studentToDelete = 'Jovana'; 
    studentData = studentData.filter(
      (student) => student.ime.toLowerCase() !== studentToDelete.toLowerCase()
    );
    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Studentot e izbrisan.');
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
      if (student.ime.toLowerCase() === studentToChange.toLowerCase()) {
        return { ...student, ocena: newGrade };
      }
      return student;
    });

    const updatedStudentJSON = JSON.stringify(studentData, null, 2);
    await modules.fileWrite('./students.json', updatedStudentJSON);
    console.log('Ocena na studentot e promeneta.');
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
    console.log(`Lista na studenti:`);
    console.log(studentData);
  } catch (err) {
    console.error(err);
  }
};

readAllStudents();
