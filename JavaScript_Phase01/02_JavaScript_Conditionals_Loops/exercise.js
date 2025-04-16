// Problem: Create an array containing different types of teas  

let arr=["masala","Oolang","black","green","lemon","orange"]

// Problem: Add "Chamomile Tea" to the existing list of teas  
arr.push("Chamomile");

// Problem: Remove "Oolong Tea" from the list of teas  
let index=arr.indexOf("Oolang");
if(index>-1){
    arr.splice(index,1)
}
console.log(arr);

// Problem: Filter the list to only include teas that are caffeinated  

const caffeinatedTeas=arr.filter((e)=>{
      return e!=="green"
})

console.log(caffeinatedTeas);

// Problem: Sort the list of teas in alphabetical order 
const sortedArray=arr.sort(); 
console.log(sortedArray);

// Problem: Use a for loop to print each type of tea in the array  
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")  

let caffeinated=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]!=="green"){
        caffeinated++;
    }
}

console.log(caffeinated);
// Problem: Use a for loop to create a new array with all tea names in uppercase
const newArr=[]

for(let i=0; i<arr.length; i++){
     newArr.push(arr[i].toLocaleUpperCase());
}
console.log(newArr);


// Problem: Use a for loop to find the tea name with the most characters  

let longestTea="Chamomile";

for(let i=0; i<arr.length; i++){
    if(longestTea.length<arr[i].length){
        longestTea=arr[i];
    }
}

console.log(longestTea);

// Problem: Use a for loop to reverse the order of the teas in the array  
let reveresedArray=[]
for(let i=arr.length-1; i>=0; i--){
    reveresedArray.push(arr[i]);
}

console.log(reveresedArray);