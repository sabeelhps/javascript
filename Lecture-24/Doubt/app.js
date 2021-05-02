const divs = document.querySelectorAll('div');


for (let item of divs) {
    item.addEventListener('click', function (event) {
        console.log(event.target);
        console.log("Clicked on div");
    })
}

// divs[0].addEventListener('click', function () {
//     console.log("Clicked on div 1");
// });x

// divs[1].addEventListener('click', function () {
//     console.log("Clicked div 2");
// });

// divs[2].addEventListener('click', function () {
//     console.log("Clicked div 3");
// });