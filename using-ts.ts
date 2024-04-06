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

 function countAndPrint<T>(element:T):[T,string]{
    let descriptionText= 'got no value.';
    if (element.length===1){
        descriptionText='Got 1 element.';
    }else if (element.length>1){
        descriptionText='got'+element.length + 'elements.';
    }
    return[element, descriptionText];
 }

 console.log(countAndDescribe('hi there'));

 function extractAndConvert< T extends object,U extends keyof T>(obj:T,key: U){

    return obj[key];
 }
 extractAndConvert({name: 'max'},'name');

 class DataStorage<T extends string |number |boolean>{
    private data: T[]=[];

    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T){
        if(this.data.indexOf(item)===-1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }
    getItem(){
        return[...this.data];
    }
 }
 const textStorage= new DataStorage<string>();
 textStorage.addItem('max');
 textStorage.addItem('manu');
 textStorage.removeItem('max');
 console.log(textStorage.getItem());

 const numberStore=new DataStore<number>();
 /*
 const odjStore= new DataStorage<object>();
 objStorage.addItem({name:'max'});
 objStorage.addItem({name:'manu'});
 */ 
