//Deep Copy (solution -- shallow copy won't work with inner objects).

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

const p1kaString=JSON.stringify(p1); 

//String me convert kia
// ({"fname":"chintu","lname":"pal","address":{"state":"delhi","country":"india","pincode":"110053","location":"bhajanpura"}})

let p2= JSON.parse(p1kaString)   // again object mei convert kia



p2.fname="vikas"
p2.lname="sharma"
p2.address.country="America"

console.log(p1.address.country); //india
console.log(p2.address.country); //America



// Limitations of JSON.stringify() and JSON.parse()
// 🚫 Does not support functions (Functions are lost in the conversion)
// 🚫 Loses undefined values (Properties with undefined are removed)
// 🚫 Cannot copy special objects (e.g., Date, RegExp, Map, Set)


let obj = {
    name: "John",
    birthdate: new Date(), 
    greet: function() { console.log("Hello"); }
};

let objCopy = JSON.parse(JSON.stringify(obj));
console.log(objCopy.birthdate); // String instead of Date
console.log(objCopy.greet); // undefined (Function is lost)



// Alternative for Deep Copy
// If you need to copy complex objects (including functions, dates, maps, etc.), use:

// structuredClone(obj) (modern, recommended)
// let deepCopy = structuredClone(obj); // Best built-in method


