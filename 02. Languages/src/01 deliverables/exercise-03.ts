console.log("************** DELIVERABLE 03 *********************");

const clone = source => ({...source});
const merge = (source, target) => ({...target, ...source})


//********* Sin rest operator *******/
/*
function clone(source) {
    const cloned ={};
    for (let prop in source)
      cloned[prop] = source[prop]
    return cloned
  }

function merge(source, target) {
  const result = clone(target);
  for (let prop in source)  
    result[prop] = source[prop];
  return result;
}
*/

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };


console.log ("Objeto a: ", a);
console.log ("Objeto b: ", b);
console.log ("Clon de a: ", clone (a));
console.log ("Merge de a y b: ", merge (a,b));


console.log ("");
console.log ("");

