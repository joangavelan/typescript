function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 == "string") {
    result = input1.toString() + " " + input2.toString();
  } else {
    console.log(
      "ERR: Both parameters need to be of the same data type (numbers or strings)"
    );
  }
  return result;
}

const combineAges = combine(30, 26);
const combineNames = combine("Max", "Anna");

console.log(combineAges);
console.log(combineNames);
