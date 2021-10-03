"use strict";
// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function (constructor: any) {
//     console.log("Rendering template");
//     const HTMLelem = document.getElementById(hookId);
//     const p = new constructor();
//     if (HTMLelem) {
//       HTMLelem.innerHTML = template;
//       HTMLelem.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
// @Logger("LOGGING")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Joan";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }
// const pers = new Person();
// console.log(pers);
function Log(target, properyName) {
    console.log("Propery decorator!");
    console.log(target, properyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    // @Log2
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error("Invalid price - should be positive");
    }
    // @Log3
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
