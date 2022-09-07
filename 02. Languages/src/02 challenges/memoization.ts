
console.log("************** CHALLENGE MEMOIZATION *********************");

//APARTADO A y B
console.log("## Apartado A y B");
const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

const memoize = (func) => () => func.value ? func.value : func.value=func();


const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415



// APARTADO C
console.log("");
console.log("## Apartado C");

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
  (count++,`${text} `.repeat(repetitions).trim())
  
type MemoizeTypes = string | number | boolean;
const memoizeWithParams = (func : (...funcArgs:MemoizeTypes[]) => string ) => { 
  const valuesMap : Map<string,string> = new Map(); 
  return ((...args:MemoizeTypes[]):string => {
      const stringifiedArgs = JSON.stringify(args);
      if (!valuesMap.has(stringifiedArgs))  {     
        valuesMap.set(stringifiedArgs, func(...args)); 
      }  
      return valuesMap.get(stringifiedArgs);
    })
}

const memoizedGreet = memoizeWithParams(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2



console.log("");
console.log("");
