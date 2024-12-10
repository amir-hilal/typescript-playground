function identity<T>(value: T): T { // T is a placeholder for any type
  return value; //this will return the same type as received
}

const num = identity<number>(42);
const str = identity<string>("Hello");

class Box<T> { // T is a placeholder for any type
  contents: T;
  constructor(value: T) {
      this.contents = value;
  }
}

const numberBox = new Box<number>(10);
console.log(numberBox.contents); // 10
