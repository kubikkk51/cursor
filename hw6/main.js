const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3 , 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//1
function getSubjects(student) {
    const listOfSubjects = Object.keys(student.subjects);
    const arrListOfSubjects = listOfSubjects.map( (subject) => {
        return subject.substring(0,1).toUpperCase() + subject.substring(1).toLowerCase().split("_").join(" ");
    })
    return arrListOfSubjects;
}
console.log( getSubjects(students[0]) );

//2

function getAverageMark (student) {
    const arrsOfMarks = Object.values( students[0].subjects );
    const arrAllMarks = arrsOfMarks[0].concat( arrsOfMarks[1],arrsOfMarks[2] );
    const averageMark = ( arrAllMarks.reduce( (sum, mark) => sum + mark ) / arrAllMarks.length ).toFixed(2);
    return averageMark;
}

console.log( getAverageMark(students[0]) );

//3
function getStudentInfo (student) {
   const infoOfStudent = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
   }
   return infoOfStudent;
}

console.log( getStudentInfo(students[0]) );

//4
 const getStudentsNames = (students) => students.map( names => names.name ).sort();
console.log( getStudentsNames(students) );

//5
function getBestStudent (students) {
    let bestStudent = students.reduce( ( a, b ) =>  getAverageMark(a) > getAverageMark(b) ? a : b ).name; 
    return bestStudent;
}
console.log( getBestStudent(students) );
//6
function calculateWordLetters(word) {
  const arrOfLetter = word.toLowerCase().split('');
  const result = {};
  arrOfLetter.map( letter => !result[letter] ? result[letter] = 1 : result[letter]++ );
  return result;
}

console.log( calculateWordLetters('Тест') );



