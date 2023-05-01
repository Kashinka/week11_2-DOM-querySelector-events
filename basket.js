let cucumberCost = 300;

let tomatoCost = 450;

let greeneryCost = 110;

let sourcreamCost = 95;

const result1 = document.getElementById("result1");

result1.innerHTML = `Огурцы ${cucumberCost} руб.`;

const result2 = document.getElementById("result2");

result2.innerHTML = `Помидоры ${tomatoCost} руб.`;

const result3 = document.getElementById("result3");

result3.innerHTML = `Зелень ${greeneryCost} руб.`;

const result4 = document.getElementById("result4");

result4.innerHTML = `Сметана ${sourcreamCost} руб.`;

let sum = cucumberCost + tomatoCost + greeneryCost + sourcreamCost;

const result5 = document.getElementById("result5");

result5.innerHTML = `Итого: ${sum} руб.`;

let cucumber20Per = cucumberCost * (20/100);

let tomato20Per = tomatoCost * (20/100);

let greenery20Per = greeneryCost * (20/100);

let sourcream20Per = sourcreamCost * (20/100);

let couponCost = cucumber20Per + tomato20Per + greenery20Per + sourcream20Per;