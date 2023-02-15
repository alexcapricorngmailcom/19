// 1. Ниже прикреплен документ с формой в таблице. Ваша задача с помощью навигации и поиском DOM элементов найти:

// 1) Таблицу с id="age-table".
console.log(document.querySelector('#age-table'));
// 2) Все элементы label внутри этой таблицы (их три).
console.log(document.querySelectorAll('#age-table * label'));

// 3) Первый td в этой таблице (со словом «Age»).
console.log(document.querySelector('#age-table * td'));
// 4) Форму form с именем name="search".
console.log(document.querySelector('[name=search]'));
// 5) Первый input в этой форме.
console.log(document.querySelector('[name=search] input'));
// 6) Последний input в этой форме.
console.log(document.querySelector('[name=search] > input'));

// P.S. Никаких document.getElementById('elem') и т.п. устаревшего хлама.

// 2. Напишите код для создания списка. Запрашивайте содержимое пункта у пользователя с помощью prompt(), 
//затем вы создаете элемент <li> и добавляете его к <ul>. Процесс прерывается, когда пользователь нажимает 
//Esc или вводит пустую строку. Все элементы должны создаваться динамически.

// P.S. Если пользователь вводит HTML-теги, пусть в списке они показываются как обычный текст.

console.log();
console.log('====================');
console.log();

let ul = document.createElement('ul');
ul.className = 'task2';

let parentElem = document.querySelector('body');
let child = parentElem.insertBefore(ul, parentElem.lastChild);


let text = prompt('Введите пункт списка');

while (text) {
    createLiElement(text);
    text = prompt('Введите пункт списка');
}

function createLiElement(text) {
    let li = document.createElement('li');
    li.classList.add('task2-item');
    li.innerText = text;
    child.append(li);
}

console.log(document.querySelector('.task2'));



