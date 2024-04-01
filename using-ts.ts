
let age;

const userName='Max';

age=30;
console.log(userName);

if (age>20){
    var isOld=true;
}


const add =(...numbers:number[])=>{
    return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0);
   
};
const addNumbers=add(2,5,2,3);
console.log(addNumbers);

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