let fruits=["apple","cherry","banana"]
let inFruits=new Array("kiwi","avacado","dragon fruit");


console.log(fruits[0]); //access value
fruits[0]="blueberry" //reinitialize the 
console.log(fruits); // print the array
console.log(inFruits.length); //print the array length

// array predefine factory(methods)

fruits.push("orange") //add element in the end of array
fruits.unshift("graps") //add element in the start of array
console.log(fruits);
