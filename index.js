// Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
// Измени пол Стёпы на мужской используя метод textContent

let card__info = document.querySelector('.catalog');

let card__text = card__info.querySelector('.card__text');

let styopaGender = card__text.querySelector('.gender').textContent;

console.log(styopaGender);