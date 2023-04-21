// Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
// Измени пол Стёпы на мужской используя метод textContent

let card__info = document.querySelector('.catalog');

let card__text = card__info.querySelector('.card__text');

let styopaGender = card__text.querySelector('.gender').textContent = "мальчик";

console.log(styopaGender);

// Добавь в карточки кнопку “Узнать больше”. При клике по кнопке, будет открываться страница Википедии с описанием породы котика.

function openInfo () {
    window.open(document.https:ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0_(%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F));
};
