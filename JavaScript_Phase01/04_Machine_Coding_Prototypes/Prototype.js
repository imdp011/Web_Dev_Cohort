const arr=[1,2,3]

console.log(arr.length);

const str="chintu"

console.log(str.length)

const object={x:1,
    y:2
}

console.log(object.x)

// so everyDatatype having a some predfines methods as we are using .

// In object we can acesss the value by (dot) operator after putting a dot then mulitple methods are available to use these all methods are define in there prototype.

//same as for string and array.

//Example

// const father={skin, height,eycolor}

// father.Prototype={skin, height,eycolor}

// child.__proto__=father.Prototype

// similarly with array's and string

// jo property parents mei availabel h wo child mei bhi hogi


Array.prototype.chintu=function(){
    console.log("this is wriiten by chintu");
}

//Array base class mei new property or method ko add kia 

console.log(arr.chintu());

// we can easily user this method in every array because we define that in base class