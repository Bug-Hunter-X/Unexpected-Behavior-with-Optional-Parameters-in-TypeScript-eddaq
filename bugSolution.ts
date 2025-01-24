function printNameCorrect(name?: string): void {
  console.log(name);
}

printNameCorrect(); // Prints undefined
printNameCorrect('John'); // Prints 'John'

let optionalName: string | undefined = undefined;
printNameCorrect(optionalName); // Prints undefined

//The solution avoids using conditional checks. TypeScript handles the undefined case directly by correctly logging the optional parameter value.