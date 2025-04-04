let arr=[1,4,2,3,6]

let sum=0;

function sumVal(values){
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum  // if we do console instead of return then it will give the undefined also.
}

console.log(sumVal(arr));
// console.log(sumVal([12,32,64,9,74]));    
