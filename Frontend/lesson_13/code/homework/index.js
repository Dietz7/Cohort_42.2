/*Создайте HTML-документ с нумерованным списком '

', содержащим первоначально 5 элементов '
'. Необходимо:
Добавить новые элементы в начало и в конец списка
Изменить текст второго элемента списка
Удалить третий элемент
Изменить стили по своему усмотрению для четвертого элемента*/

let newListItem = document.createElement('li');
newListItem.textContent = 'Peaches: vitamin A, C, E';
let list = document.querySelector('ol');
list.prepend(newListItem);
newListItem.textContent1 = 'Grapes: A, C, E';
list.append(newListItem);

let secondEl = list.children[1];
secondEl.textContent = 'Kiwi: vitamin C';

let thirdEl = list.children[2];
thirdEl.remove();

let fourthEl = list.children[3];
fourthEl.style.fontWeight = 'bold';
fourthEl.style.backgroundColor = 'darkgreen';
fourthEl.style.border = '2px solid green';