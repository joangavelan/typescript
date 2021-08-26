// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Joan",
    age: 24,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
// console.log(person)
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];
// for(let hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
//   // console.log(hobby.map())
// }
