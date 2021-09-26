"use strict";
// const names = ["Max", "Manu"];
// // names[0].split(' ');
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then(data => {
//   // data.split(' ')
// })
// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return Object.assign(obj1, obj2);
// }
// const mergedObjects = merge({ name: "Max" }, { age: 30 });
// console.log(mergedObjects);
// interface Lengthy {
//   length: number;
// }
// function countAndDescribe<T extends Lengthy>(elem: T): [T, string] {
//   let descriptionText = "Got no value.";
//   if (elem.length === 1) descriptionText = "Got 1 element";
//   else if (elem.length > 0)
//     descriptionText = "Got " + elem.length + " elements.";
//   return [elem, descriptionText];
// }
// console.log(countAndDescribe("Hi there!"));
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }
// console.log(extractAndConvert({ name: "Joan" }, "name"));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
        // console.log(this.data.indexOf(item));
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
var textDataStoraged = textStorage.getItems();
textDataStoraged.push("hey");
console.log(textStorage.getItems());
console.log(textDataStoraged);
var numbersStorage = new DataStorage();
numbersStorage.addItem(1);
numbersStorage.addItem(2);
numbersStorage.removeItem(2);
console.log(numbersStorage.getItems());
// const objStorage = new DataStorage<object>();
// const maxObjRef = { name: "Max "};
// objStorage.addItem(maxObjRef);
// objStorage.addItem({ name: "Joan" });
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem(maxObjRef)
// console.log(objStorage.getItems());
