"use strict";
var names = ["Max", "Manu"];
// names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});
promise.then(function (data) {
    // data.split(' ')
});
