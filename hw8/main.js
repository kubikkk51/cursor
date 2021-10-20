
//1
class Student {
    constructor ( university, course, fullName ){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksOfStudent = [ 5, 4, 4, 5 ];
        this.statusOfStudent = true;
        
    }
//2    
    getInfo () {
        return `Студент ${ this.course }-го курсу ${ this.university }, ${ this.fullName } `;
    }
    //3
    get marks () {
        return this.statusOfStudent ? this.marksOfStudent : null;
    }
    //4

    set marks (mark) {
        return this.statusOfStudent ? this.marksOfStudent.push(mark) : null;
        
    }
// 5   
    getAverageMark () {
        return this.marksOfStudent.reduce( (sum, a) => (sum += a) ) / this.marksOfStudent.length;
    }
//    6 
    dismiss () {
        return this.statusOfStudent = false;
    }
    // 7
    recover () {
        return this.statusOfStudent = true;

    }
}
const ostap = new Student ( 'Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер' );

console.log( ostap.getInfo() );
console.log( ostap.marks );
console.log('Додамо оцінку: 5');
ostap.marks = 5 ;
console.log( ostap.marks );
console.log( 'середній бал: ', ostap.getAverageMark() );
console.log('вимикаємо студента');
ostap.dismiss();
ostap.marks = 5 ;
console.log( ostap.marks );
console.log('вмикаємо студента')
ostap.recover();
ostap.marks = 5 ;
console.log( ostap.marks );

class BudgetStudent extends Student {
    constructor ( university, course, fullName ) {
        super ( university, course, fullName );
        const result = setInterval( () => this.getScholarship(), 30000 );
        setTimeout( () => { clearInterval(result) }, 90000 );
    } 
    getScholarship () {
       if ( this.statusOfStudent && this.getAverageMark() >= 4 ) {
           console.log( 'Ви отримали 1400 грн. стипендії' )
    } else {
        console.log('Треба було ходити на пари!');
    }
  }
}
const misha = new BudgetStudent ( 'karazina', 5, 'Kubarev Misha' );
//console.log(misha.getScholarship());


