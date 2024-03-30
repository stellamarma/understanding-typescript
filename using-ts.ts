type Combinable=number |string;


function combine(n1: Combinable ,n2: Combinable, resultman: 'as_number'|'as_string'){
    let result;
    if(typeof n1==='number'&& typeof n2==='number'){
        
        result=n1+n2;
       
    }else{
        result=n1.toString()+n2.toString();
    }
    return result;
}
function printResult(num:number):void{
    console.log('Result'+num);
}
let combineValues:(a:number, b:number)=>number;//its function parameter

combineValues=add;

console.log(combineValues(8,8));
function addAndHandle(n1:number,n2:number,cd: (num:number)=>void){
    const result=n1+n2;
    cd(result);
}
//printResult(add(5,12));
addAndHandle(10,20,(result)=>{
    console.log(result);
});
const combinadAges= combine(30,30,'as_number');
console.log(combinadAges);
