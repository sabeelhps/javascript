
let number=100;

let guessed_num=Number(prompt("Enter the number"));

if(number===guessed_num){
    alert("You guessed it correctly");
}
else if(guessed_num<number){
    alert("Number is low.Try Again");
}
else{
    alert("Number is too high.Try Again!!");
}