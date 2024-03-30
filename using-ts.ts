
const person:{
    name: string;
    age:number;
    hobbies:string[];
    role:[number,string];
} ={
    name: 'maxmal',
    age: 30,
    hobbies:[ 'Sport','Cooking']
    role: [2,'author']

};
person.role.push('admin');
//person.role[1]=10; its wrong
let favoriteActivities: string[];
favoriteActivities= ['Sport'];

console.log(person.name);
for(const hoddy of person.hobbies){
    console.log(hobby.toUpperCase());
}
