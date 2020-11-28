
// Nested while loops

let n=9;

let row=1;

while(row<=n){  //Iterating on each row

    let star=1;
    let str="";
    while(star<=row){ //Making our star string
        str+=" * ";
        // console.log("*")
        star++;
    }
    console.log(str);
    
  row=row+1;  
}