

// function checkOdd(n){

//     if(n%2===0){
//         console.log(n+" is "+"Even");
//     }else{
//         console.log(n+" is "+"Odd!!");
//     }
// }

// checkOdd(3);
// checkOdd(4);
// checkOdd(5);
// checkOdd(6);
// checkOdd(7);


function checkOdd(n){

    if(n%2===0){
        return false;
    }

    return true;
}


if(checkOdd(n)){
    console.log("Odd!!");
}else{
    console.log("Even");
}


