// we can't construct(make) objects if we don't have constructor in Parent class


// Default Constructor

//as a programmer if you not defined any constructor in parent class defulat language which you are using will make the constructor by (any interpreter or compiler).

//Parameterized Constructor

//define a constructor in a class which takes inputs from the objects  as a parameter that is a parameterized construtor


// person class(BluePrint) k ander -->>Prototype
// actual objects(p1,p2,etc) k ander -->> __proto__ hota h class(blueprint) k prototype ka

 
class Person{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname

    }git 

    getfullname(){
        return `${this.fname} ${this.lname}`;
    }
}


const p1 =new Person('Chintu','Sharma')
const p2 =new Person('Mintu','Shukla')


console.log(p1.getfullname())