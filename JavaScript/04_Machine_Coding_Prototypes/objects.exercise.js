// 11. Create an object representing a type of tea with properties for name, type, and caffeine content

const teas={
    name:"masala Tea",
    type:"regular",
    caffeine_content:"high"
}

// 12. Access and print the name and type properties of the tea object
console.log(teas.name,teas.type);

// 13. Add a new property origin to the tea object
teas.origin="Assam";

// 14. Change the caffeine level of the tea object to "Medium"
teas.caffeine_content="medium"
// 15. Remove the type property from the tea object
delete teas.type
console.log(teas);

// 16. Check if the tea object has a property origin

if(teas.origin){
    console.log("ha h property")
}
else{
    console.log("nhi h property")
}
// 17. Use a for...in loop to print all properties of the tea object

    for (const key in teas) {
        console.log(`key=${key}, value=${teas[key]}`)
    }

// 18. Create a nested object representing different types of teas and their properties

const AlltypeOfTea={
    tea01:{
        type:"orange Flavour"
    },
    tea02:{
        type:"masala Tea"
    },
    tea03:{
        type:"black tea"
    }
}

// 19. Create a copy of the tea object

const teasCopy={
    ...teas
}

console.log(teasCopy);
// 20. Add a custom method describe to the tea object that returns a description string

Object.prototype.Description=function(){
    return "this is the description of Teas"
}

console.log(teas.Description());


// 21. Merge two objects representing different teas into one


    const teas1={
        Teaname:"masala Tea",
        teatype:"regular",
        Tea_caffeine_content:"high"
    }

    const teas2={

        name:"adrak Tea",
        type:"regular",
        caffeine_content:"medium"
    }

    const teas3={...teas1,  ...teas2}

    console.log(teas3);