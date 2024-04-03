class Department{
    private employees:string[]=[];
    constructor(public readonly name:string, private id:string){
       
    }
    describe(this: Department){
        console.log('Deparment:', (${this.name});(${this.id}) );
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting',"polo");



console.log(accounting);

const accountntingCopy= {name:'s',describe: accounting.describe};


