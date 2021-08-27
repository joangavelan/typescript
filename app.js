function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else if (typeof input1 === "string" && typeof input2 == "string") {
        result = input1.toString() + " " + input2.toString();
    }
    else {
        console.log("ERR: Both parameters need to be of the same data type (numbers or strings)");
    }
    return result;
}
var combineAges = combine(30, 26, "as-number");
var combineStringAges = combine("30", "26", "as-number");
var combineNames = combine("Max", "Anna", "as-text");
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
