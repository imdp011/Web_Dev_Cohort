let numberofGuest=4;

let pizzaSize;
//small <=2
//medium <=5
//large

//greedy algorithim - jase hi pahela answer mil jata h wo bahar aa jata h. 
//if else internally work on greedy algorithim.

if(numberofGuest<=2){
    pizzaSize="Small"
}

else if(numberofGuest<=5){
    pizzaSize="Medium"
}

else {
    pizzaSize="Large"
}

console.log(pizzaSize)