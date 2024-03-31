
let age;

const userName='Max';

age=30;
console.log(userName);

if (age>20){
    var isOld=true;
}

console.log(isOld);
const add =(a:number,b:number)=>a+b;
console.log(add(2,5));

const printOutput=(output:string|number)=>console.log(output);
printOutput(add(2,5));