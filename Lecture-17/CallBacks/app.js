


function Fun(y,a,b) {
    
    console.log("Inside Fun Function!!");
    y(a, b);
}

function x(a,b) {
    console.log('Inside Function x');
    console.log("Sum is ", a + b);
}

Fun(x,3,4);

// Fun(function () {
//     console.log(`Hello from Anonymous function`);
// });

// Fun(()=> {
//     console.log(`Hello from Arrow function`);
// });