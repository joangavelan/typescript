"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log("Rendering template");
                const HTMLelem = document.getElementById(hookId);
                if (HTMLelem) {
                    HTMLelem.innerHTML = template;
                    HTMLelem.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Joan";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const pers = new Person();
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
