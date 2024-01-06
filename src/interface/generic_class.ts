class MyObject<T> {
  id: number;
  pet: string;
  checkup: T;
  constructor(id: number, pet: string, additionalProperty: T) {
    this.id = id;
    this.pet = pet;
    this.checkup = additionalProperty;
  }
}
const myArray: MyObject<string>[] = [
  new MyObject(1, "cat", "false"),
  new MyObject(2, "dog", "true"),
];
const newPropertyAddition: MyObject<number | boolean>[] = myArray.map((obj) => {
  return new MyObject(obj.id, obj.pet, obj.id % 2 === 0);
});
console.log(newPropertyAddition);
