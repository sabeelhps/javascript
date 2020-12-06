
let n=10;
let m=30;

let j;
for(let i=n;i<=m;i++){

    j=2;
    for(j=2;j<=i-1;j++){

        if(i%j===0){
            break;
        }
    }
    if(j==i){
        console.log(i);
    }

}