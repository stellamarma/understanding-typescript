class Department{
    name: string;
    construction(n:string){
        this.name=n;
    }
}
const accounting = new Department('Accounting');

console.log(accounting)