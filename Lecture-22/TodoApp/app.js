const inp = document.querySelector('#inp');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const h1 = document.querySelector('h1');



btn.onclick = function () {
    
    let todoText = inp.value;

    const li = document.createElement('li');

    li.innerText = todoText;

    li.onclick = function (e) {
        e.target.remove();
    }

    list.append(li);

    inp.value = "";
}

h1.onclick = function () {
    h1.style.color = 'lightgreen';
}