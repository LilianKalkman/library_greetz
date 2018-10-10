console.log(window.$G);
console.log(window.Greet);

var person1 = $G('Lilian', 'Kalkman', 'es');
person1.getFullName();
var greet1 = person1.getGreeting();
var greet2 = person1.getGreetingFormal();
console.log(person1, greet1, greet2);

// var person2 = $G('Lilian', 'Kalkman', 'ne');
// console.log(person2);
// person2.validateLanguage();

var formal = true;
console.log(person1.greet(formal));
console.log(person1.greet());

console.log(person1.setLang('en').greet());
// person1.updateHTML('.greeting__text', 'formal');


// get user input first and lastname
var input = document.querySelector('input');
var selectLang = document.querySelector('select');

$('button').bind('click', function(){
  // get user input
  var inputValue = input.value;

  // get the first and lastname and store in variables
  var name = inputValue.split(' ');
  var first = name[0];
  var second = name[1];

  // get the language
  var lang = selectLang.value;
  console.log(lang);

  // call the function and pass arguments
  var greetingState = $G(first, second, lang);
  greetingState.updateHTML('.greeting__text');

  // empty values
  input.value = '';

})


// get language (make new input for it, met keuzes language opties)

// store the user input names as first two arguments in the greet function, and language as third

// render greeting based on that on the screen (use jQuery)
