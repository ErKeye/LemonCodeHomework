console.log("************** DELIVERABLE 02 *********************");

const concat2 = (a:any[], b:any[]) => [...a,...b]; 
const concatX = (...args:any[][]) => args.reduce(concat2);

const array1 = [0,1,2,3];
const array2 = ["a","b","c","d"];
const array3 = [10,20,30];

console.log ("Array1: ", array1);
console.log ("Array2: ", array2);
console.log ("Array3: ", array3);
console.log ("Concatena2: ", concat2 (array1,array2));
console.log ("ConcatenaX: ", concatX (array1,array2, array3));

console.log ("");
console.log ("");

