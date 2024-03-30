
/*const ADMIN=0;
const READ_ONLY=1;
const AUTHOR=2;
its the same as line 7
*/
enum Role{ADMIN,READ_ONLY, AUTHOR}
const person ={
    name: 'maxmal',
    age: 30,
    hobbies:[ 'Sport','Cooking']
    role: Role.ADMIN // i have access to the value

};
person.role.push('admin');
//person.role[1]=10; its wrong
let favoriteActivities: string[];
favoriteActivities= ['Sport'];

console.log(person.name);
