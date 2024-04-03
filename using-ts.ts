class Department{
    name: string;
    private employees:string[]=[];
    constructor(n:string){
        this.name=n;
    }
    describe(this: Department){
        console.log('Deparment:'+ this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');



console.log(accounting);

const accountntingCopy= {name:'s',describe: accounting.describe};

accountntingCopy.describe();
