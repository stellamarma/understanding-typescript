/*
const names: Array<string>=[];

const promise: Promise<string>=new Promise((resolve, reject))=>{
    setTimeout(()=>{
        resolve('This is done');
    },2000);
});

promise.then(data=>{
    data.split('');
})
*/
function merge<T extends object,U extends object>(objA: T,objB: U){
    return Object.assign(objA,objB);
}
const mergedObj= merge({name:'max'},{age:30});
console.log(mergedObj);

interface lengthy{
  length:number;  
}

 function countAndPrint<T>(element:T):[T,sting]{
    let descriptionText= 'got no value.';
    if (element.length===1){
        descriptionText='Got 1 element.';
    }else if (element.length>1){
        descriptionText='got'+element.length + 'elements.';
    }
    return[element, descriptionText];
 }

 console.log(countAndDescribe('hi there'));