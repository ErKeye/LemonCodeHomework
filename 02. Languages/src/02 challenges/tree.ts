console.log("************** CHALLENGE TREE *********************");

type Tree<T> =  {value:T} | {value: T, nodes:Tree<T>[]};

const numberTree : Tree<number> = {value : 5, nodes : [{value:3, nodes:[{value:6},{value:8}]}, {value : 5}]};
console.log(numberTree);


console.log("");
console.log("");