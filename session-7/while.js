
// break and continue in js

// let x=1;

// while(x<=10){

//     console.log(x);

//     if(x===5){
//         console.log("Break is executed!!");
//         break;
//     }
//     x++;
// }


// break in nested while loops
// while(true){
    
//     console.log("1st while loop");
    
//     while(true){
        
//         console.log("2nd while loop");
        
//         while(true){
//             console.log("3rd while loop");
//             break;
//         }
//         break;
//     }

//     break;

// }

// continue

let x=0;

while(x<=10){

    x++;

    if(x===5){
        continue;
    }
    console.log(x);
}