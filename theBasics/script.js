// variable name and the value we want to assign
// rules - Variables cannot start with numbers or symbols except for a dollar sign and underscore
var firstName = 'John';
console.log(firstName);

var lastName=('Smith');
var age = (28);

var fullAge = true;

console.log(lastName, age, fullAge);

// this will print undeifned, no value has been defined
var job;
console.log(job);


// VARIABLE MUTATION & TYPE COERCION
// type coersion is where javascript automatically converts the value, in this case age was converted into a string by Javascript

var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age)

// declaring variables on the same line then assigning values to each one
// even the boolean was coverted to a string via type coercion
var job , isMarried;
job = "teacher";
isMarried = false;
alert(firstName + ' is a ' + age + 'year old' + job + '. Is he Married?' + isMarried);

// prompt allows us to get an answer
var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);

// Variable mutation is changing the value of a value
age = 'twenty eight';


// BASIC OPERATORS

// math oeprators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 38;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// logical operastors
// < > greater than, less than

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
// will tell us the type of the value
console.log(typeof johnOlder);

// operator precedence
// which operator is executed first?
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// minus is executed first
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple asignments
var x, y;
x = y = (3+5) * 4 - 6;
console.log(x, y);

// more OPERATORS
x *= 2;
x += 1;
x++
