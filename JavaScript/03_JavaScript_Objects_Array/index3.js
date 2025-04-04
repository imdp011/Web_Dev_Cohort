//Spread operator (shallow copy)

let p1={
    fname:"chintu",
    lname:"pal",
}

let p2={
   ...p1 //spread operator(Shallow Copy).
}

p2.fname="vikas"
p2.lname="sharma"

console.log(p1); //{ fname: 'chintu', lname: 'pal' }
console.log(p2); //{ fname: 'vikas', lname: 'sharma' }