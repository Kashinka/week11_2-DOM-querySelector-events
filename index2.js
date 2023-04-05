// при клике по кнопке скрипт запустит код
button.onclick = function () {
    let white = document.querySelector('.white');
    console.log(white);
    white.classList.add('red'); // напишите условие при котором будет переключаться класс white у кнопки (класс переключает цвет бэкграунда)
  }