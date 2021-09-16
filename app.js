"use strict";
// type AddFn = (a: number, b: number) => number;
var add = function (n1, n2) { return n1 + n2; };
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 24;
        if (n)
            this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name)
            console.log(phrase + " " + this.name);
        else
            console.log("Hi!!");
    };
    return Person;
}());
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }
var user1 = new Person("Joan");
// user1.name = "Manu";
// user1.greet('Hi there I am')
// console.log(user1);
user1.greet("Hey");
