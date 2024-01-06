/*interface Career {
    occupation:string;
}

interface Person {
    name:string;
    age:number;
    occupation:string;
}


const personObj:Person = {
    name:'wafiq',
    age:69,
    occupation:"player"
}

const person = <T extends Career>(obj:T)=> {
    return obj.occupation;
}

person(personObj)
*/

// Filter function
/*
const animals = ['cat', 'dog', 'crocodile'];
const numbers = [10, 6, 9, 2, 6, 7, 8];
type Filter = <T>(array:T[], func:(item:T)=>boolean )=>T[]

const filterCats =(item:string)=> {
    return (item === 'cat')
}


const filterNumber =(item:number)=> {
    return (item === 7)
}

const filter:Filter =(array, func)=> {
    let filteredArr:Array<string|number> = [];
    array.forEach((i)=> {
        if(func(i)) filteredArr.push(i)
    })
    return filteredArr;
}

console.log(filter(animals, filterCats));
console.log(filter(numbers, filterNumber));
*/

// Map Function
/*const randomNumber: number[] = [65, 44, 12, 4];

const square = (i: number) => {
  return i * i;
};

const numToStr = (i: number) => i.toString();

type MapFunc = <T>(
    array: T[],
    func: (item: T) => string | number
) => Array<string | number>;

const map: MapFunc = (array, func) => {
    if (array.length === 0) throw new Error("Array is empty");
    let newArr: Array<string | number> = [];
    array.forEach((val) => newArr.push(func(val)));
    return newArr;
};

console.log(map(randomNumber, square));
console.log(map(randomNumber, numToStr));
*/

const a = <T extends number[]>(arr: T) => {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
};

const num: number = 12;
const str: string = "wafiq";
const arr = [10, 20];
console.log(a(arr));
