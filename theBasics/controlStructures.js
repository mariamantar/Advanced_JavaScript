// -------------------------------
// IF ELSE STATEMENTS
// -------------------------------

var name = 'John';
var age = '26';
var isMarried = 'no';

if(isMarried === 'yes') {
  console.log(name + 'is married');
} else {
  console.log(name + 'will hopefully marry soon');
}


// -------------------------------
// BOOLEAN AND LOGIC SWITCH
// -------------------------------

Boolean Logic Basics :
AND ( && ) => true if ALL are true
OR ( || ) => true if ONE is true
NOT ( ! ) => inverts true/false value

var age = 25;

if(age < 20);
 console.log(john is a teenager);
} else if (age >= 20 && age < 30) {
  console.log('John is a young man')
} else {
  console.log(john is an adult);
}

// swicth STATEMENT
var job = 'teacher';

job = prompt('what does John do?')

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John drives a cab');
    break;
    case ('cop');
  console.log('John helps fight crime');
  break;
  default:
  console.log('John does soemthing else');
}
