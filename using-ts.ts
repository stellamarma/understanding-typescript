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