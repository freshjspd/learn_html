/*
удаление элемента
elem.remove();

создание элемента
document.createElemet(tag);

1. tag
2. content
3. attributes+class
4. !!! обязательно прикрепить к родителю

P/S как добавить класс???
1. elem.classList.add('name');
2. elem.setAttribute('class', 'name');

методы добавления
в начало node.prepend(el)
в конец  node.append(el)
до узла   node.before(el)
после узла  node.after(el)
заменить узел  node.replaceWith(al)
*/
const divContainerEl = 
document.querySelector('.container');

divContainerEl.style.backgroundColor = 'blue';
//divContainerEl.remove();

const pEl = document.createElement('p');
pEl.innerText = "It's my first created para";  //pEl.textContent
pEl.classList.add('mark');
pEl.setAttribute('isSelected', true);

document.body.append(pEl);


const cardEl = document.createElement('div');
const fullNameEl = document.createElement('p');
cardEl.classList.add('card');
fullNameEl.classList.add('userFullName');
fullNameEl.textContent = 'John Smith';

cardEl.append(fullNameEl);
document.body.append(cardEl);






