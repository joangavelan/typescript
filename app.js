"use strict";
// const names = ["Max", "Manu"];
// // names[0].split(' ');
function countAndDescribe(elem) {
    var descriptionText = "Got no value.";
    if (elem.length === 1)
        descriptionText = "Got 1 element";
    else if (elem.length > 0)
        descriptionText = "Got " + elem.length + " elements.";
    return [elem, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
