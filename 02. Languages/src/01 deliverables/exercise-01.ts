console.log("************** DELIVERABLE 01 *********************");

const head = <t> ([headElement,] : t[]) => headElement;
const tail = <t> ([, ...tail] : t[]) => tail;
const init = <t> (arrayIn:t[]) => arrayIn.slice(0,-1); 
const last = <t> (arrayIn:t[]) => arrayIn[arrayIn.length-1]; 


const numberArray = [0,1,2,3,4,5,6,7,8,9];
const stringArray = ["a","b","c","d","e","f","g","h"];
const anyArray = ["a", 13526, {nombre:"Alberto"}, undefined, 34, null, [], "Manolito" ];

console.log ("Array de tipo any: ", anyArray);
console.log ("  Head:",head(anyArray));
console.log ("  Tail:",tail(anyArray));
console.log ("  Init:",init(anyArray));
console.log ("  Last:",last(anyArray));

console.log ("Array de tipo number: ", numberArray);
console.log ("  Head:",head(numberArray));
console.log ("  Tail:",tail(numberArray));
console.log ("  Init:",init(numberArray));
console.log ("  Last:",last(numberArray));

console.log ("Array de tipo string: ", stringArray);
console.log ("  Head:",head(stringArray));
console.log ("  Tail:",tail(stringArray));
console.log ("  Init:",init(stringArray));
console.log ("  Last:",last(stringArray));
console.log("");
console.log("");
