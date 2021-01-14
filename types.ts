// array
let numList: number[] = [1, 2, 3];
console.log(numList);

// array generic
let genericList: Array<string | number> = [1, 'a'];
console.log(genericList);

let tuple: [number, string];
//tuple = [0, "value", 2, "a"];
tuple = [0, 'value'];
console.log(tuple[0]);
console.log(tuple[1]);

// Enum
enum Color {
  Red,
  Green = 3 ,
  Blue = 6
}
console.log("\nEnum");
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color[0]);

// Never
// The never type represents the type of values that never occur.
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}


//Type assertions
let someValue: unknown = "Hello world";
//typeAssertions(someValue);
typeAssertions(someValue as string);
typeAssertions(<string>someValue);
function typeAssertions(value: string) {
  console.log(value);
}