//Problem

// Here is a big problem: if `p1` has nested objects like `address`, the spread operator won't work on them. If we change the value of `p2.address.country = "America"`, it will also reflect in the `p1` object.

// Because it again holds the reference to the inner object.

let p1={
    fname:"chintu",
    lname:"pal",
    address:{
        state:"delhi",
        country:"india",
        pincode:"110053",
        location:"bhajanpura"
    }
}

let p2={
   ...p1 //spread operator(Shallow Copy).
}

p2.fname="vikas"
p2.lname="sharma"
p2.address.country="America"

console.log(p1.address.country); //America
console.log(p2.address.country); //America


// If we change the value of `p2.address.country = "America"`, it will also reflect in the `p1` object.