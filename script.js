console.log(window.$G);
console.log(window.Greet);

var person1 = $G('Lilian', 'Kalkman', 'es');
person1.getFullName();
var greet1 = person1.getGreeting();
var greet2 = person1.getGreetingFormal();
console.log(person1, greet1, greet2);

var person2 = $G('Lilian', 'Kalkman', 'ne');
console.log(person2);
person2.validateLanguage();





// get user input first and lastname

// get language (make new input for it, met keuzes language opties)

// store the user input names as first two arguments in the greet function, and language as third

// render greeting based on that on the screen (use jQuery)
