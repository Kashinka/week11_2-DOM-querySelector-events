// Есть список сообщений

// При помощи JavaScript для каждого сообщения добавьте слушатель события на крестик (один элемент - один слушатель), который по нажатию удаляет <div>

let cross1 = document.querySelector('#cross1');

function delDiv1() {
    document.getElementById("div1").remove();
}

cross1.addEventListener('click', delDiv1);