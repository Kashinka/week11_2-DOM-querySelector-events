// Устанавливаем цены на продукты
const cucumberCost = 300;
const tomatoCost = 450;
const greeneryCost = 110;
const sourcreamCost = 95;

// Получаем элементы страницы для вывода результатов
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");

// Выводим цены на продукты
result1.innerHTML = `Огурцы ${cucumberCost} руб.`;
result2.innerHTML = `Помидоры ${tomatoCost} руб.`;
result3.innerHTML = `Зелень ${greeneryCost} руб.`;
result4.innerHTML = `Сметана ${sourcreamCost} руб.`;

// Считаем сумму всех покупок
const sum = cucumberCost + tomatoCost + greeneryCost + sourcreamCost;

// Выводим итоговую сумму
result5.innerHTML = `Итого: ${sum} руб.`;

// Устанавливаем значение скидки в 20%
const couponDiscount = 0.8;

// Считаем цены на продукты со скидкой
const cucumber20Per = cucumberCost * couponDiscount;
const tomato20Per = tomatoCost * couponDiscount;
const greenery20Per = greeneryCost * couponDiscount;
const sourcream20Per = sourcreamCost * couponDiscount;

// Считаем сумму покупок со скидкой
const couponCost = cucumber20Per + tomato20Per + greenery20Per + sourcream20Per;

// Получаем кнопку
const button = document.getElementById("button");

// Устанавливаем обработчик события для кнопки
button.onclick = function() {
    // Выводим цены на продукты со скидкой
    result1.innerHTML = `Огурцы ${cucumber20Per} руб.`;
    result2.innerHTML = `Помидоры ${tomato20Per} руб.`;
    result3.innerHTML = `Зелень ${greenery20Per} руб.`;
    result4.innerHTML = `Сметана ${sourcream20Per} руб.`;
    result5.innerHTML = `Итого: ${couponCost} руб.`; // Выводим итоговую сумму со скидкой

};