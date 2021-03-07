

function fun(innerFun) {
    
    // console.log(innerFun);

    innerFun()

}


// function f() {
//     console.log('Inside function f');
// }

fun(function () {
    console.log('Inside function f');
});