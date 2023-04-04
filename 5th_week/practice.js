class Person {
 constructor(name, age) {
     this.name = name ;
     this.age = age;
 }

 sayHello() {
     console.log(`안녕, ${this.name}입니다.`);
 }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }

  fetch() {
    console.log(`${this.name}이(가) 공을 가져옵니다.`);
  }
}

class Whale extends Animal {
    constructor(name) {
        super(name) ;
    }

    speak() {
        console.log(`${this.name}이 초음파를 냅니다`)
    }

    water() {
        console.log(`${this.name}이 물을 뿜습니다`)
    }
}

const dog = new Dog("뽀삐");
dog.speak();
dog.fetch(); 
