console.log("************** CHALLENGE DEEP ACCESS *********************");
console.log("Deep Get:")
const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

const deepGet = (objectIn, ...path) => {
  //console.log ("ENtrada", objectIn, path, !path[0]);
  if (!path || path.length == 0)
    return objectIn;
  else {
    let nextStepsPath, currentStepPath;
    [currentStepPath, ...nextStepsPath] = path;
    return deepGet (objectIn[currentStepPath], ...nextStepsPath);
  }   
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

console.log("");
console.log("Deep Set:")

const myObjectToSet = {};

const deepSet = (value, objectIn, ...path) => {
  if (!path || path.length == 0)
    return;
  else if (path.length == 1)  
    objectIn[path[0]]= value;
  
  else { 
       let nextStepsPath, currentStepPath;
      [currentStepPath, ...nextStepsPath] = path;      
      if (!objectIn[currentStepPath])
        objectIn[currentStepPath] = {};
      deepSet (value, objectIn[currentStepPath], ...nextStepsPath);      
  }
}



deepSet(1, myObjectToSet, "a", "b");
console.log(JSON.stringify(myObjectToSet));  // {a: { b: 1}}
deepSet(2, myObjectToSet, "a", "c");
console.log(JSON.stringify(myObjectToSet));  // {a: { b: 1, c: 2}}
deepSet(3, myObjectToSet, "a");
console.log(JSON.stringify(myObjectToSet));  // {a: 3}
deepSet(4, myObjectToSet);
console.log(JSON.stringify(myObjectToSet));  // Do nothing // {a: 3}



console.log("");
console.log("");
