const number = (a: number, b: number): number => {
  return a + b;
};

type UserName = string;
const userName: UserName = "wafiq";

let age: any = true;
age = [1, 2, 5];

const multiply = (number: unknown): unknown => {
  if (typeof number === "number") return number * 2;
  throw new Error("Please provide a number");
};

const numArr: number[] = [12, 42, 45];
numArr.forEach((num) => console.log(num));

// Make an Object (article) which takes author,content,title props.
// Way -1:
let author1: {
  author: string;
  content: string;
  title: string;
  sold: number;
  age?: number;
};
author1 = {
  author: "wafiq",
  content: ".....",
  title: "Holistic Information of JS",
  sold: 12,
};

// Way -2:
type Author = {
  author: string;
  content: string;
  title: string;
  sold: number;
  age?: number;
};
const author2: Author = {
  author: "wafiq",
  content: ".....",
  title: "Holistic Information of JS",
  sold: 12,
};
const author3: Author = {
  author: "esam",
  content: "Some naughty stuff",
  title: "How to beat your wifu",
  sold: 69,
};

let bool: boolean;
bool = typeof "a" === "string";

/* Type Inference
let hour=112;
hour = ''
*/

// UNION Types
type Dog1 = {
  name: string;
  barks: boolean;
  wags: boolean;
};
type Cat1 = {
  name: string;
  purrs: boolean;
};
type HybridAnimal1 = Dog1 | Cat1;

const dog1: HybridAnimal1 = {
  name: "sheru",
  barks: false,
  wags: true,
};
const cat1: Cat1 = {
  name: "sheru",
  purrs: false,
};
// All props of Either Dog1 / Cat1 must be specified.
/*const cat:HybridAnimal= {
  name:"meow",
  barks:false,
}*/

// UNION Types in Primitives
type StringOrNumber = string | number;
const country: StringOrNumber = "Canada";

// INTERSECTION Types
type Dog2 = {
  name: string;
  barks: boolean;
  color: string;
};
type Cat2 = {
  name: string;
  purrs: boolean;
  color: string;
};
type HybridAnimal2 = Dog2 & Cat2;

const dog: HybridAnimal2 = {
  name: "sheru",
  color: "white",
  barks: false,
  purrs: false,
};

// Array
var ageArr1: Array<number> = [11, 25, 69, 78, 5];
var ageArr2: Array<number | string> = [11, "25", 69, 78, 5];
var ageArr3: (string | number)[] = [11, "25", 69, 78, 5];
type Cricket = {
  player: number;
  ampier: boolean;
  stuff: [string];
};

type Football = Cricket[]; //Array of objects

const arr: Football = [
  {
    player: 11,
    ampier: true,
    stuff: ["bat"],
  },
];

// [number_of_students, passed_or_not, students_name]
type Result = [number, boolean, boolean?];
const result: Result = [3, true];

// Readonly Array & Tuples
type ReadOnlyTuple = Readonly<[number, string]>;
const a: ReadOnlyTuple = [69, "t"];

const ReadOnlyArray: Readonly<string[]> = ["s"];

// Undefined
/*let number1:number;
const arrOfObj = [
  {name:"wafiq", age:"20"},
  {name:"esam", age:"30"}
]
const res = arrOfObj.find(obj=> obj.name==number1);
console.log(res.age); //this should prone an error
*/

// ENUMS
export enum Roles {
  Color,
  Color1,
  Admin = "admin",
  Author = "author",
  Editor = "editor",
}
console.log(Roles.Color);

type Person = {
  name: string;
  age: number;
  role: Roles;
};

const personObj: Person = {
  name: "wafiq",
  age: 30,
  role: Roles.Author,
};
