





let choice=Number(prompt("Enter your Choice \n 1.Add\n 2.Sub \n 3.Div \n 4.Mul"));

let x,y,ans;

switch(choice){

    // Addition
    case 1:
            x=Number(prompt("Enter a number"));
            y=Number(prompt("Enter Another number"));
            ans=x+y;
            alert("Answer : "+ans);
            break;
    
    // Substraction
    case 2:
            x=Number(prompt("Enter a number"));
            y=Number(prompt("Enter Another number"));
            ans=x-y;
            alert("Answer : "+ans);
            break;

    // Division
    case 3:
            x=Number(prompt("Enter a number"));
            y=Number(prompt("Enter Another number"));

            if y===0 {
                alert("Second number cannot be zero");
                break;
            }

            ans=x/y;
            alert("Answer : "+ans);
            break;

    // Multiplication
    case 4:
            x=Number(prompt("Enter a number"));
            y=Number(prompt("Enter Another number"));
            ans=x*y;
            alert("Answer : "+ans);
            break;

    default:
            alert("Invalid Choice!!");
}



