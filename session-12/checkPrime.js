

function checkPrime(n){

    for(let i=2;i<=n-1;i++){

        if(n%2===0){
            return false;
        }
    }

    return true;
}


if(checkPrime(10)){
    console.log("Prime!!");
}
else{
    console.log("Not Prime!!!");
}