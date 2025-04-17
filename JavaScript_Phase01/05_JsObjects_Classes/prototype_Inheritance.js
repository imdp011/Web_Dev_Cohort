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
};

// koi bhi property object mei define nhi h to to (__proto__) mei find ki jayegi


obj2.__proto__=obj1
// obj1.__proto__.__proto__=null

obj1.__proto__=null

//ab isko likh k yaha Object Class ka refrence hi khtm ho gya h ab {3rd console} nhi chalega.
//yaha par chain break ho gai h isliye nhi chalega





console.log(obj1.getfullName());
console.log(obj2.getfullName()); 
// chal raha h kyoki obj2 ke proto mei refrence h obj1 ka or usme wo property h isliye.

console.log(obj2.toString());
//ye bhi chalega kyoki obj2 ke proto means-->obj1 and obj1 mei bhi nhi h to obj1 ka proto means (Object class) waha define h ye isliye ye bhi chalega


// __proto__  jab tak null na ho jaye jab tak check hoga




