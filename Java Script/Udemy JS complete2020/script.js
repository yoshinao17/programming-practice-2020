// var firstName= 'Yoshinao';
// console.log(firstName);

// var lastName = 'Hara'
// var age = 28;

// var fullAge= false;
// console.log(fullAge);

// job = 'Teacher';
// console.log(job);

// var firstName ='John';
// var age = 28;

// //type coercion//
// console.log(firstName + ''+ age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '.Is he married?'  + isMarried  );

//Variable mutation//
// age = ' twenty eight ';
// job = ' driver ';

// alert(firstName + ' is a ' + age + ' year old ' + job + ' Is he married? ' + isMarried ) ;

// var lastName = prompt('What is his last name?');
// console.log(firstName + '' + lastName);

//Basic operators//

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn= 28;
// ageMark= 33;

// yearJohn= now - ageJohn;
// yearMark= now - ageMark;
// console.log(yearJohn);


// console.log(yearJohn);
// console.log(now + 2); 
// console.log(now * 2);
// console.log(now / 10);

// //Logical Operator
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn)
/*
var now = 2018;
var yearJohn = 1989;
var fullAge =  18;

//Multiple Operator
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) /2;
console.log(average);

//Multiple assignments
var x, y;
x = (3 + 5) * 4 -6; //8*4-6//32-6//26
console.log(x);

//More Operators
x *= 2;
console.log(x);
x +=10;
console.log(x);

// Coding Challenge1

var massMark = 78; //kg
var heightMark = 1.69 //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn );
console.log(BMIMark, BMIJohn);


var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI );

*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
//     console.log(firstName + 'is married');

// } else{
//   console.log(firstName + ' will hopefully marry soon :)')

// }

//if else statement
/*
var isMarried = true;
if (isMarried){
  console.log(firstName + 'is married');

} else{
console.log(firstName + ' will hopefully marry soon :)')
}

var massMark = 78; //kg
var heightMark = 1.69 //meters

var massJohn = 92;
var heightJohn = 1.85;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn );

if(BMIMark > BMIJohn){
  console.log('Mark\'s BMI is higher than John\'s.');
  
}else{
console.log('John\'s BMI is higher than Mark\'s.')

}


// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI );

*/

//Boolean logic
// var firstName = 'John';
// var age=20;

// if(age < 13){
//   console.log(firstName + ' is a boy.');
// } else if (age >=13 && age < 20){
//   console.log(firstName + ' is a young man.');
// } else if(age >= 20 && age<30 ){
//   console.log(firstName + ' is a teenager.');
  

// }

// else{
//   console.log(firstName + ' is a man.')

// }

//The ternary operator and switch statements

// var firstName= 'John';
// var age= 16;

// age >=  18 ? console.log(firstName + 'drinks beer') 
// : console.log(firstName + ' drinks juice');


// var firstName='Nao';
// var age='34';

// //Ternary operator
// age <= 34 ? console.log(firstName + ' is working hard') : console.log(firstName + ' studies hard.');


// var drink= age >= 18 ? 'beer' : 'juice' ;
// console.log(drink);

//switch statement
// var job ='cop';
// switch(job){
// case'teacher':
//       console.log(firstName + ' teaches kids how to code.');
//       break;

// case 'driver' : 
//      console.log(firstName + ' drives an uber in Lisbon');
//      break;
    
// case 'designer':
//      console.log(firstName + ' designs beautiful web');
//      break;
//      default:
//      console.log(firstName + ' does something else');

     

// };

// var firstName='Nao';
// var age= 14;
// switch(true){
//   case age < 13:
//    console.log(firstName + ' is a boy');
//    break;
//   case age >= 13 && age <20:
//   console.log(firstName + ' is a teenager.');
//   case age>=  20 && age <30:
//     break;
//     console.log(firstName + ' is a young man.');
//     break;
//     default:

//     console.log(firstName + 'is a man');

// }

// var firstName='Nao';
// var age='34';

// //Ternary operator
// age <= 34 ? console.log(firstName + ' is working hard') : console.log(firstName + ' studies hard.');




// var height;
// height=23;

// if (height || height===0){
// console.log('Variable is defined');
// } else {
// console.log('Variable has not been defined');

// }

// //equality operators
// if (height == '23'){
//    console.log('The == operator does type coercion!')

// } 

// challenge2

// var firstName = 'John';
// var totalPoints = 312;
// var numberGames = 3;

// console.log(89 + 120+ 103);
// console.log( totalPoints / numberGames); //104 John

// var averageJohn = 104;


// var firstName = 'Mike';
// var totalPoints = "333"
// var numberGames = '3'
// console.log(116 + 94 + 123);
// console.log( totalPoints / numberGames); //111 Mike

// var pointJohn = 104;
// var pointMike = 111;

// console.log ( pointJohn < pointMike);


// if (scoreJohn > scoreMike) {
//   console.log(' John\'s team wins with ' +  scoreJohn +'poiints' );
// } else if(scoreMike > scoreJohn) {
// console.log(' Mike\'s team wins with ' +  scoreMike + ' points ');

// }
// else{
// console.log(' There is a draw');

// }

//Functions


// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName){
// var age= calculateAge(year);
// var retirement = 65- age;

// if(retirement > 0){
// console.log(firstName + ' retires in '+ retirement + 'years');

// }

// else{
// console.log(firstName + ' is already retired.')
// }

// }
// yearsUntilRetirement (1985, 'Nao');

// yearsUntilRetirement (1990, 'Mike');
// yearsUntilRetirement (1940, 'Yoko');

//function declaration
// function whatDoYouDo(job, firstName){

// }


//function expression



//Array
//Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
console.log(names.length);
console.log(years[1])

names[1] = "Ben";
console.log(names);
//Mutate arrray data
names[5]= 'Mary';
names[names.length]= 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop()
john.pop()
john.pop()
console.log(john);

john.push('futsal');
john.unshift('Apple');
john.shift();
john.push('teacher');
console.log(john);

console.log(john.indexOf("Mr."));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer': 'John is a designer' ;
console.log(isDesigner);


var isTeacher = john.indexOf('teacher') === 5 ? 'John is a teacher': 'John is a designer' ;
console.log(isTeacher);































