/*interface Animal<AnimalType, Size> {
  type: AnimalType;
  size: Size;
}

enum AnimalType {
  dog = "dog",
  cat = "cat",
  elephant = "elephant",
  crocodile = "crocodile",
}

const animal: Animal<AnimalType, number> = {
  type: AnimalType.cat,
  size: 1.2,
};

console.log(animal);
*/

// -----------------------------------------------------------------
/*
interface Contact {
  name: string;
  email: string;
}

interface Form<T> {
  error: {
    [K in typeof T]?: string;
  };
  value: T;
}

const contactForm: Form<Contact> = {
  error: {
    email: "Plz provide valid email",
  },
  value: {
    name: "wafiq",
    email: "wafiq@gmail.com",
  },
};

console.log(contactForm);

class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const esam = new Queue<number>();
esam.push(1);
console.log(esam);
*/

// ---------------------------------------------------------------------

/*type Scores<T> = T[];

const scores: Scores<number> = [1, 3, 69];

type Scores = Array<number>;

const scores: Scores = [1, 3, 69];
*/

// ---------------------------------------------------------------------
/*interface Res {
  json: () => Promise<{ [key: string]: string }>;
}
const promisedResponse: Promise<Res> = fetch(
  "https://jsonplaceholder.typicode.com/posts/1"
);
promisedResponse.then((d) => d.json()).then((d) => console.log(d));
*/

// --------------------------------------------------------------------------
interface Office<T> {
  [key: string]: T;
}

const office: Office<
  string | number | Array<number | { [key: string]: number } | string>
> = {
  name: "wafiq",
  age: 45,
  email: "wafiq@gmail.com",
  employee: [{ ema: 69 }],
  food: ["banana", "orange", "jackFruit"],
};
