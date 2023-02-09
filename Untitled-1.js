// export { raju } from "unti";
var abc = 47;

// console.log(abc.padStart(3, 0));
var npn = [];
var duplicateArrayq = ["10", 2, 2, 3, 5, 9, 7, 8, 9, 10];
var realArray = new Set(duplicateArrayq);
console.log(Object.values(duplicateArrayq));
// for (let [i, value] in duplicateArrayq) {
//   debugger;
//   if (value % 2 == 0) var evenarr = [];
//   evenarr.push(i);
//   console.log(evenarr);
//   //
// }
var newarr = duplicateArrayq.filter((v, i, arr) => {
  debugger;
  return arr[i] % 2 == 0;
});
// var newadd = duplicateArrayq.fi((i) => i === 9); // var evenArray=realArray.forEach(return )
// console.log(newadd);
var npn = duplicateArrayq.map(
  (i) => {
    debugger;
    return Math.sqrt(i) % 1 == 0 ? Math.sqrt(i) : false;
  }
  //   debugger;
  //   if (i < 5) npn.push(i);
  //   console.log(npn);
);
var eog = duplicateArrayq.reverse((a, b, c) => {
  debugger;
  return a === 2;
});
raju = () => {
  debugger;
  console.log(details.get_emp_details());
  //    var element = document.getElementsByTagName("button");
  //    var tex = element.getAttribute("text");
  console.log(`${newarr}`);
  console.log(`The Value is ${eog} `);
  console.log(`The Value is ${eog} `);
  //   console.log(arr1);
  //   console.log(evenarr);
};
var details = {
  Name: "Prajwal",
  gender: "male",
  company: "TCS",
  Exp: "1.2",
  emp_id: "2168724",
  prgm_lngues: ["javascript", "java", "html", "and css"],
  get_emp_details: () => {
    // for (i = 0; i < details.prgm_lngues - 1; i++) {
    console.log(
      `Name is ${details.Name}  gender is ${details.gender}  working in ${details.company} have a experiance of ${details.Exp}  knows the lanngueges ${details.prgm_lngues}`
    );
    // }n
  },
};
console.log(Object.values(details));
// setTimeout(() => details.get_emp_details(), 3000);
// setInterval(() => {
//   // var countu = 0;
//   console.log(abc);
//   abc++;
//   console.log(Object.values(details));
// }, 1000);
let p = fetch(
  " https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3"
);
p.then((value1) => value1.json()).then((value2) => console.log(value2));
console.log(value2);
