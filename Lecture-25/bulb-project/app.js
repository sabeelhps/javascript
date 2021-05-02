const on = document.getElementById('on');
const off = document.getElementById('off');
const img = document.querySelector('img');




on.addEventListener('click', function () {
    img.setAttribute('src', './assets/bulb-on.jpg');
})

off.addEventListener('click', function () {
    img.setAttribute('src', './assets/bulb-off.jpg');
})