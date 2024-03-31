
let age;

const userName='Max';

age=30;
console.log(userName);

if (age>20){
    var isOld=true;
}


const add =(a:number,b:number=1)=>a+b;
console.log(add(2,5));

const printOutput=(output:string|number)=>console.log(output);
printOutput(add(2));

const hobbies =[ 'sport', 'cooking'];
const activeHobbies=['hiking'];

activeHobbies.push(...hobbies);

const person={
    name:'Max',
    age:30
};

const copiedPerson={...person};