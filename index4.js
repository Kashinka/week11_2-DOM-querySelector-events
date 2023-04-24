// Как найти в ней:

// 1. Таблицу с id="age-table"
// 2. Все элементы label внутри этой таблицы (их три)
// 3. Форму form с именем `name="search-person"`

let table = document.getElementById('age-table');

let elems = table.getElementsByTagName('label');

let form = document.getElementsByName('search-person');