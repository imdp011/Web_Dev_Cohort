function printchai(){
    console.log("hello chai");
}


//using template literals

function bringBrush(numberofBrush){
    console.log(`here is your ${numberofBrush} brush`) 
}


function addTwo(numOne, numTwo){
    return numOne+numTwo;

}


printchai();
bringBrush(12);
addTwo(4,6); // it will only return not print.
console.log(addTwo(32,34)); // print also.
