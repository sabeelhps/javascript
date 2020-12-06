

let choice=Number(prompt("Enter your Choice :\n 1.Square Root \n 2.Factorial \n 3.Power \n4.Exit" ));

while(choice!=4){

    switch(choice){

        case 1: let num=Number(prompt("Enter a number"));
                let sq_root=Math.sqrt(num);
                console.log(sq_root);
                break;
        
        case 2: let n=Number(prompt("Enter a number"));
                let fact=1;
                for(let i=1;i<=n;i++){
                    fact=fact*i;
                }
                console.log(fact);
                break;
        case 3:
                let a=Number(prompt("Enter a first number"));
                let b=Number(prompt("Enter second number"));

                let p=a**b;
                console.log(p);
                break;

    }

    choice=Number(prompt("Enter your Choice :\n 1.Square Root \n 2.Factorial \n 3.Power \n4.Exit" ));

}

console.log("I am outside the do-while loop...");