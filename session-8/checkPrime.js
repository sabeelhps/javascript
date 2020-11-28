

let num=Number(prompt("Enter a number :"));

let i=2;

while(i<=num-1){

    if(num%i===0){
        console.log("Not Prime!!");
    }

    i++;    
}

if(i==num){
    console.log("Prime");
}

