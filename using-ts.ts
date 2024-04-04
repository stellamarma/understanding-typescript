type Admin{
    name: string;
    privileges: string[];
};
type Employee{
    name:string;
    starData:DataTransfer;
};
//interface ElevatedEmployee extends Employee, Admin{}
type ElevatedEmployee= Admin & Employee;

const e1: ElevatedEmployee={
    name: 'Max',
    privileges: ['create-server'],
    startDate:new Date()

};
type Combinable= string|number;
type Numeric= number | boolean;

type Universal= Combinable & Numeric;

function add(a:Combinable, b: Numeric){
    if (typeof a==='string'|| typeof b === 'string'){
        return a.toString()+ b.toString();
    }
    return a+b;
}
 type UnknownEmployee= Employee|Admin ;

 function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name:' + emp.name);

    if('privaleges' in emp)
        console.log('Privileges: ' +emp.startDate);//typeGuard

 }

 printEmployeeInformation(e1);

 class Car  
