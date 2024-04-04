type Admin{
    name: string;
    privileges: string;
};
type Employee{
    name:string;
    starData:DataTransfer;
};
//interface ElevatedEmployee extends Employee, Admin{}
type ElevatedEmployee= Admin & Employee;

const e1: ElevatedEmployee={
    name: 'Max',
    privileges: 'create-server',
    startDate:new Date()


};
type Combinable= string |number ;
type Numeric= number|boolean;
type Universal= Combinable & Numeric;

function add(a:Combinable, b:Combinable ){
    if(typeof a==='string'|| typeof b=== 'string'){
        return a.toString()+ b.toString;
    }
    return a+b;
}
interface Bird{
    type:'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse'
    runningSpeed:number;
}
type Animal = Bird| Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed=animal.flyingSpeed;
            break;
        case 'horse':
            speed=animal.runningSpeed;
    }
}
moveAnimal({type:'bird', flyingSpeed:10});

//const userInputElement =<HTMLInputElement> document.querySelector('user-input')!;

const userInputElement =document.querySelector('user-input')! as HTMLInputElement;

userInputElement.value='Hi there';

interface ErrorContainer{

    [prop: string]: string;
}
const errorBag:ErrorContainer={
    email:'Not a valid email'
    username:'must start with capital'

};