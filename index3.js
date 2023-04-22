// Есть список сообщений

// При помощи JavaScript для каждого сообщения добавьте слушатель события на крестик (один элемент - один слушатель), который по нажатию удаляет <div>

let cross1 = document.querySelector('#cross1');

function delDiv1() {
    document.getElementById("div1").remove();
}

cross1.addEventListener('click', delDiv1);


let cross2 = document.querySelector('#cross2');

function delDiv2() {
    document.getElementById("div2").remove();
}

cross2.addEventListener('click', delDiv2);

let cross3 = document.querySelector('#cross3');

function delDiv3() {
    document.getElementById("div3").remove();
}

cross3.addEventListener('click', delDiv3);