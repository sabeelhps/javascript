

// let a = [1, 2, 3, 4, 5];

// function square(num) {
  
//     return num * num *num;
// }

// let b = a.map(square)
// console.log(b);


let arr = [1, 2, 3, 4, 5, 6, 7];

function isOdd(n) {

    if (n % 2 !== 0) {
        return true;
    }

    return false;
}

let res = arr.filter(isOdd);

console.log(res);