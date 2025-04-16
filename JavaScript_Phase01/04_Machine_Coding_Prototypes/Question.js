
//first method

function chintu(input){
    const newArr=[]
    for(let i=0; i<input.length; i++){
        if(input[i].item==Object.values(input[i])[1]){
            if(!newArr.includes(Object.values(input[i])[1])){
                newArr.push(Object.values(input[i])[1]);
            }
        }
    }
    return newArr.sort();
}

//second method

function mintu(input){
    const newArr=[...new Set(input.map(entry=>entry.item))];
    console.log(newArr);
    return newArr.sort();
}



mintu(  [
    { name: "Avi", item: "Phone" },
    { name: "Bea", item: "Wallet" },
    { name: "Avi", item: "Phone" }
  ]);

chintu(  [
    { name: "Avi", item: "Phone" },
    { name: "Bea", item: "Wallet" },
    { name: "Avi", item: "Phone" }
  ]);





  