const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];



//1
const getPairs = (students) => {
    const girls = [];
    const boys = [];
    const pairs = [];
    for ( let i = 0; i < students.length; i++ ) {
      let nameOfStudents = students[i];
        
        if (nameOfStudents.endsWith('а')) {
            girls.push(nameOfStudents);
        } else {
            boys.push(nameOfStudents);
        }
        
    }
    
    for (let i = 0; i < girls.length; i++) {
    pairs.push( [ boys[i], girls[i] ] );
  }
    return pairs;
    
}

//2

const getThemesOfPairs =( pairsOfStudents, themes ) => {
    const themesOfPairs = [];
    themesOfPairs.push( [pairsOfStudents[0][0] + ' і ' + pairsOfStudents[0][1]].concat(themes[0]) );
    themesOfPairs.push( [pairsOfStudents[1][0] + ' і ' + pairsOfStudents[1][1]].concat(themes[1]) );
    themesOfPairs.push( [pairsOfStudents[2][0] + ' і ' + pairsOfStudents[2][1]].concat(themes[2]) );
    return themesOfPairs;
}

//3
const getMarksOfStudents = ( students, marks ) => {
    const marksOfStudents = [];
    for ( let i = 0; i < students.length; i++ ){
        marksOfStudents.push( [ students[i], marks[i] ]);
    }
    return marksOfStudents;
}

//4
const getRandomMarks = ( studentProjects ) => {
    const randomMarks = [];
    const marksOfProjects = [];
    for ( let i = 0; i < studentProjects.length; i++ ){
         randomMarks.push([ Math.round(Math.random() * (5 - 1) + 1)]);
 
    } 
    
    for ( let i = 0; i < studentProjects.length; i++ ) {
        marksOfProjects.push( studentProjects[i].concat( randomMarks[i] ) );
    }
    return marksOfProjects;
}

//////
const pairsOfStudents = getPairs(students);
const studentProjects = getThemesOfPairs(pairsOfStudents, themes);
console.log(pairsOfStudents);
console.log(getThemesOfPairs(pairsOfStudents, themes));
console.log(getMarksOfStudents(students, marks));
console.log(getRandomMarks(studentProjects));
