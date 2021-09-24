"use strict";
// const names = ["Max", "Manu"];
// // names[0].split(' ');
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then(data => {
//   // data.split(' ')
// })
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var mergedObjects = merge({ name: "Max" }, { age: 30 });
console.log(mergedObjects.name);
