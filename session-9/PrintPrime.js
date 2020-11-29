
let num=Number(prompt("Enter a number : "));
let n=1;
while(n<=num){ //iteraring on the number from 1 to num
    
    let i=2;

    while(i<=n-1){ //check for prime

        if(n%i===0){
            break;
        }
        
        i++;
    }

    if(i===n){
        console.log(n);
    }
    n++;
}

