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

class DataStorage<T extends string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
    // console.log(this.data.indexOf(item));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
const textDataStoraged = textStorage.getItems();
textDataStoraged.push("hey");

console.log(textStorage.getItems());
console.log(textDataStoraged);

const numbersStorage = new DataStorage<number>();
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