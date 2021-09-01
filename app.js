"use strict";
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('click');
});
// const userName = 'Max'
// console.log('App initialized')
// function combine(
//   input1: number | string,
//   input2: n  umber | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else if (typeof input1 === "string" && typeof input2 == "string") {
//     result = input1.toString() + " " + input2.toString();
//   } else {
//     console.log(
//       "ERR: Both parameters need to be of the same data type (numbers or strings)"
//     );
//   }
//   return result;
// }
// const combineAges = combine(30, 26, "as-number");
// const combineStringAges = combine("30", "26", "as-number");
// const combineNames = combine("Max", "Anna", "as-text");
// console.log(combineAges);
// console.log(combineStringAges);
// console.log(combineNames);
