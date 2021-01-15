// Basic
interface LabeledValue {
  label: string;
}

function printLabel(obj: LabeledValue) {
  console.log(obj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// Optional Properties
interface Config {
  name?: string;
  port?: number;
}

function createConfig(config: Config): { name: string; port: number } {
  let newConfig = { name: 'Hello', port: 1111 };
  if (config.name) newConfig.name = config.name;
  if (config.port) newConfig.port = config.port;

  return newConfig;
}
console.log(createConfig({ name: "black"}));


// Readonly
interface Point {
  readonly x: number;
  readonly y: number;
  names: ReadonlyArray<string>
};
let p1 = {x: 10, y: 40, names: ["Jae", "Jang"]};
//errors
// p1.x = 20
// p1.y = 20
// p1.names[2] = "Hello"
// p1.names.push("Hello");
// converto to normal array
let normalArray = p1.names as string[];


// Excess Property Checks
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

// colour not assignable
//let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

//or to assign the object to another variable
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);

//or
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}


// Function Types

interface FooFunc {
  (first: string, last: string): string;
}

let myFunc: FooFunc;
let myFunc2: FooFunc;
let myFunc3: FooFunc;

myFunc = (first: string, last: string = "h") => first + last;
myFunc2 = (f: string, l: string) => f + l;
// Error
//myFunc3 = (first: number) => first;



// Indexable Types

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];


interface NumberDictionary {
  [index: string]: number;
  length: number; // ok, length is a number
  //name: string; // error, the type of 'name' is not a subtype of the indexer
//Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; error!



// Class Types

interface ICustom {
  name: string;
  setName(n: string): void;
}

class Custom implements ICustom {
  name: string = "Hello";
  constructor(name: string) {
    this.setName(name);
  }

  setName(name: string) {
    this.name = name;
  }
}



// Extending Interfaces

interface Person {
  name: string;
}

interface Assistant extends Person {
  staff_id: number;
}

interface Student extends Person, Assistant {
  id: number;
}

let aPerson = {} as Student;
aPerson.id = 1;
aPerson.name = "Jae";
aPerson.staff_id = 2;


// Hybrid Types

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

