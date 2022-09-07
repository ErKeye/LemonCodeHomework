console.log("************** CHALLENGE FLATTEN ARRAY *********************");

type MultiArray <t> = (t|MultiArray<t>)[];


const flattenArray =  <r> (arrayIn: MultiArray <r>): r[] =>{  
  let flatArray :r[] =[];
  for (let element of arrayIn)
  { 
    if (element instanceof Array<r>){
      flatArray.push( ...flattenArray(element));
    }
    else 
      flatArray.push (element);
  }
  return flatArray;
}

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
console.log ("Sample array: ", sample)
console.log ("Flat array: ", flattenArray(sample));
console.log("");
console.log("");
