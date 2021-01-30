


// console.log(fun(1,2,3));

function fun(x,y,z){

    return x+y+z;
}

var x=100;

// 1.Print the numbers upto N 

function printNumber(n){

    let i;
    for(i=1;i<=n;i++){
        console.log(i);
    }

}

// printNumber(20);



// 2.Check whether the number is prime or not 


function isPrime(num){
    let i=2;
    while(i<=num-1){

        if(num%i===0){
            return false;
        }
        i++;
    }
    return true;
}

// if(isPrime(4)){
//     console.log("Prime!!")
// }else{
//     console.log("Not Prime")
// }





// 3.Find the sum of all odd numbers between 55 and 130


function allOddSum(){

    let sum=0;

    for(let i=55 ; i <= 130 ;i++){

        if(i%2!==0){
            sum=sum+i;
            // sum+=i;
        }
    }

    return sum;
}

// console.log(allOddSum());
