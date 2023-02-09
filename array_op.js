// import { raju } from "./untitled.js";
var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1, 5, 6, 7, 8];
var x = [1, 2, 3, 4];
var [y, , , z] = x;
// console.log(`first Array is ${arr1}`);
// console.log(`first Array is ${arr2}`);
// console.log(y);
// console.log(z);
calculate = (a, b) => {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const division = a / b;
  return [add, subtract, multiply, division];
};
const [a, , , div] = calculate(7, 4);
// console.log(a);
// // console.log(dif);
// // console.log(mul);
// console.log(div);clr
// // raju();
const fruits = new Map([
  ["Karnataka", "Kannada"],
  ["Tamil_Nadu", "Tamil"],
  ["Andhra", "Telugu"],
  ["Kerala", "Malayalam"],
  ["Maharashtra", "Marathi"],
  ["Goa", "Konkani"],
  ["UP", "Hindi"],
]);
console.log(fruits);
console.log(fruits.get("Karnataka"));
fruits.delete("Andhra");
fruits.set("Tamil_Nadu", "Kannada");
console.log(fruits);
console.log(fruits.size);
console.log(fruits.has("Andhra"));  
console.log(fruits.has("Kerala"));
console.log(fruits.has("Konkani"));
console.log(typeof fruits);
console.log(
  "---------------------------------------------------------------------------------------------"
);
console.log(fruits instanceof Map);
for (let x of fruits.keys()) {
  console.log(x);
}
var praj = "Welcome Prajwa B to Hassan";
console.log(praj.includes("Prajwa"));
console.log(Array.from("Prajwal B"));
// console.log(fruits.get("Andhra"));
// console.log(fruits.get("Goa"));
// console.log(fruits.get("Maharashtra"));
// console.log(fruits.get("Kerala
