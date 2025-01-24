function printName(name?: string): void {
  if (name) {
    console.log(name);
  } else {
    console.log('Hello!');
  }
}

printName(); // Works as expected
printName('John'); // Works as expected

// Incorrect usage:
let optionalName: string | undefined = undefined;
printName(optionalName); // This will print 'Hello!' instead of undefined

// Correct usage:
function printNameCorrect(name?: string): void {
  console.log(name);
}

printNameCorrect(); // Prints undefined
printNameCorrect('John'); // Prints 'John'
printNameCorrect(optionalName); // Prints undefined