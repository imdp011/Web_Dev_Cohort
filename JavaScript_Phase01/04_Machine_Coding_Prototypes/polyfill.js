//filter

if(!Array.prototype.Myfilter){
    Array.prototype.Myfilter=function(userFn){

        const result=[];
        for(let i=0; i<this.length; i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }
        return result
    }
}

const arr=[1,2,3,5]

const r= arr.Myfilter((e)=>e%2==0);

console.log(r);



// Real signature ko samjho polyfill likne se pahle

// filter ka signature--->

//  input--userfn,
//  iteraite every element,
//  return- new array
//  if userfn true return karta h to current value ko new array mei include karta h.

// (e)=>e%2==0  ----------> userFn





//Map

if(!Array.prototype.Mymap){
    Array.prototype.Mymap=function(userfn){
        const NewArr=[]
        for(let i=0; i<this.length; i++){
            const value=userfn(this[i],i);
            NewArr.push(value);
        }
        return NewArr
    }
}


// real signature
// --Return > new Array
// --Iterate > Every Element
// --Input > userFn
// --Original Array > Not modify


const n=arr.Mymap((e)=>e%2==0)
const d=arr.Mymap((e)=>e*2)

console.log(arr);
console.log(n);
console.log(d);


//For Each


if(!Array.prototype.Myforeach){
    Array.prototype.Myforeach=function(userFn){
        for(let i=0; i<this.length; i++){
            userFn(this[i],i);
        }
    }
}


// real signatures
// --Iterate > Every Element
// --Input > userFn


arr.Myforeach((value, index) => {
    console.log(`value at index ${index} is ${value}`);
  });





//Reduce

if (!Array.prototype.Myreduce){
    Array.prototype.Myreduce=function(userfn,initialValue){
        let pastvalue;

        if(!initialValue){
            pastvalue=this[0]
            for(let i=1; i<this.length; i++){
                pastvalue=userfn(pastvalue,this[i],i)
            }
        }

        else{
            pastvalue=initialValue
            for(let i=0; i<this.length; i++){
                pastvalue=userfn(pastvalue,this[i],i)
            }
        }
        return pastvalue
    }

}


const result=arr.Myreduce((accumalator,currentValue)=>{
    return  accumalator+currentValue
},0)

console.log(result);


// --Return     > Single Value (any type)
// --Iterate    > Every Element (from left to right)
// --Input      > userFn + initialValue (optional)
// --Original Array > Not modified








// The initialValue is:

// The starting value of the accumulator — it can be anything: a number, string, array, object, etc., depending on what you're trying to build or return.

// Example meanings:
// If you're summing numbers, initialValue is usually 0

// If you're multiplying, it might be 1

// If you're building a string, it might be ''

// If you're collecting items into an array, it might be []

// If you're building a result into an object, it might be {}

// Why it's important:
// If you don’t provide it, reduce will use the first element of the array as the initial accumulator and start from the second element.

// If you do provide it, reduce starts from the first element, and accumulator is set to initialValue.

// Let me know if you want to see a quick example of how results change with and without initialValue.