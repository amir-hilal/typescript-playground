class Animal {
  constructor(public name: string, private sound: string) {}

  makeSound(): void {
      console.log(`${this.name} says ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
      super(name, "woof");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); 
