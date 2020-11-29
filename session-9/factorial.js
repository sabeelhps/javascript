
// Factorial of a number
let num=Number(prompt("Enter a number : "));

let fact=1;

while(num>0){
    
    fact=fact*num;
    
    num--;
}

console.log("Factorial : "+fact);