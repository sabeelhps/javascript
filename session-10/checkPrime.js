

let num=2;

let i;
for( i=2 ; i<=num-1 ;i++){

    if(num%i===0){
        console.log("Not Prime!!");
        break;
    }

}

if(i===num){
    console.log("Prime");
}
