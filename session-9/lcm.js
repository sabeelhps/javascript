
let m=8;
let n=9;


let i;

if(m<n){
    i=n;
}
else{
    i=m;
}

while(i<=n*m){

    if(i%m===0 && i%n===0){
        console.log("LCM is : "+i);
        break;
    }

    i++;
}