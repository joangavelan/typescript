"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
const animal = {
    type: "bird",
    flyingSpeed: 89,
};
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
const result = add("Joan", "Gavelán");
const resultArr = result.split(" ");
// console.log(arr);
const fetchUserData = {
    id: 1,
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privilages: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start date: " + emp.startDate);
    }
}
// printEmployeeInformation({ name: "Manu", privileges: [] });
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
const inputUserElement = (document.getElementById("user-input"));
// const inputUserElement = document.getElementById("user-input")! as HTMLInputElement;
inputUserElement.value = "Hi there";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital letter",
};
const userInput = 0;
// const userInput = null;
// const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
