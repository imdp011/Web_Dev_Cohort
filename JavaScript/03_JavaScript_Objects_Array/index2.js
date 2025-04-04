let p1={
    fname:"chintu",
    lname:"pal",
}

// Here, `p1` is a different object, and `p2` is a different object.

let p2={
    fname:p1.fname,
    lname:p1.lname
}

p2.fname="vikas"
p2.lname="sharma"

console.log(p1); //{ fname: 'chintu', lname: 'pal' }
console.log(p2); //{ fname: 'vikas', lname: 'sharma' }

// Both console values are different because, this time, in the heap memory, the references of both objects are different.



