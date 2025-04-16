
let p1={
    fname:"Mintu"
}
// Here, `p1` is an object, but `p2` is just a variable that holds the reference to the `p1` object. That's why if you change a value using `p2`, it will also update the values in the `p1` object.

let p2=p1

p2.fname="chintu"
console.log(p2); //chintu
console.log(p1); //chintu  (Why is the name changed? Because `p2` actually stores the reference to the `p1` object.)



