const obj1={
    fname:"Chintu",
    lname:"sharma",
    getfullName:function(){
        if(this.lname!==undefined) return `${this.fname} ${this.lname}`;
        return this.fname;
    }
};


const obj2={
    fname:"Mintu",
    lname:"Shukla",
    getfullName:function(){
        if(this.lname!==undefined) return `${this.fname} ${this.lname}`;
        return this.fname;
    }
};


console.log(obj1.getfullName());
console.log(obj2.getfullName());


console.log(obj1)
console.log(obj2)





























// Problem

// DRY --- Do not repeat Yourself

// if we have multiple same objects then we should change in all of them that is the repeatation of code 


// Solutions

// make a class 