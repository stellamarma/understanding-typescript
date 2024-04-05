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

 