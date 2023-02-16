// 1. Ниже прикреплен документ с формой в таблице. Ваша задача с помощью навигации и поиском DOM элементов найти:

// 1) Таблицу с id="age-table".
console.log(document.querySelector('#age-table'));
// 2) Все элементы label внутри этой таблицы (их три).
console.log(document.querySelectorAll('#age-table * label'));
// 3) Первый td в этой таблице (со словом «Age»).
console.log(document.querySelector('#age-table td'));
// 4) Форму form с именем name="search".
console.log(document.querySelector('form[name="search"]'));
// 5) Первый input в этой форме.
console.log(document.querySelector('form[name="search"] input'));
console.log(document.querySelectorAll('form[name="search"] input')[1]);
// 6) Последний input в этой форме.

// P.S. Никаких document.getElementById('elem') и т.п. устаревшего хлама.

// 2. Напишите код для создания списка. Запрашивайте содержимое пункта у пользователя с помощью prompt(), 
//затем вы создаете элемент <li> и добавляете его к <ul>. Процесс прерывается, когда пользователь нажимает 
//Esc или вводит пустую строку. Все элементы должны создаваться динамически.

// P.S. Если пользователь вводит HTML-теги, пусть в списке они показываются как обычный текст.

console.log();
console.log('====================');
console.log();


let elementUl = document.createElement('ul');
elementUl.classList.add('list');
document.body.append(elementUl);

let str = prompt('Введите элемент списка');

while (str) {
    let elementLi = document.createElement('li');
    elementLi.classList.add('list-item');
    elementLi.innerText = str;
    elementUl.append(elementLi);
    str = prompt('Введите элемент списка');
}