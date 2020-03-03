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

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + 'is married');

} else{
  console.log(firstName + ' will hopefully marry soon :)')

}

//if else statement
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



