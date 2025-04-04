//Datatypes


//Primitives type

//string
let name="chintu"

//number
let age=23

//boolean - true/false
let isPaid=true

//null --empty value 
let favouriteClass=null

//undefined -- baad mei dekhenge 
let hometown;

console.log(hometown);
console.log(favouriteClass);


// Symbol -- return unique symbol
//Bigint -- ek bada number rakhna h to 



// Non-Primitive/Objects -- Refrence Type



//array -- start with 0 index no.
let skills=["Html","Css","Js"];

//object --key value pair 
let studentProfile={
    name:"chintu",
    age:22,
    isPaid:true,
    skills:["HTML","CSS", "JS"],
    favouriteClass:null,
}

console.log(studentProfile.name);

//typeof() -- it is used to get the type on any datatype.

console.log(typeof(skills)); //object
console.log(typeof(studentProfile)); //object
console.log(typeof(hometown)); //undefined
console.log(typeof(favouriteClass)); //object
console.log(typeof(name)); //string
console.log(typeof(isPaid)); //boolean
console.log(typeof(age)); //number



