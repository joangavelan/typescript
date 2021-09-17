// // type AddFn = (a: number, b: number) => number;

// interface AddFn {
//   (a: number, b: number): number;
// }

// const add: AddFn = (n1, n2) => n1 + n2;

// interface Named {
//   name?: string;
//   outputName?: string;

//   hello?(): void;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   readonly name?: string;
//   age = 24;

//   constructor(n?: string) {
//     if (n) this.name = n;
//   }

//   greet(phrase: string) {
//     if (this.name) console.log(phrase + " " + this.name);
//     else console.log("Hi!!");
//   }
// }

// // interface Person {
// //   name: string;
// //   age: number;

// //   greet(phrase: string): void;
// // }

// let user1 = new Person("Joan");
// // user1.name = "Manu";

// // user1.greet('Hi there I am')

// // console.log(user1);

// user1.greet("Hey");
