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
printResult(add(5,12));
const combinadAges= combine(30,30,'as_number');
console.log(combinadAges);
