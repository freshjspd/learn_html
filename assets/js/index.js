/*
document.elem
childNodes (firstChild, lastChild)
parentNode
previousSibling, NextSibling

содержимое
innerHTML
innerText
outerHTML
outerText

textContent

атрибуты
elems.attributes коллекция всех атрибутов.
elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
elem.removeAttribute(name) – удаляет атрибут.
*/

let textMarkElems = 
document.querySelectorAll('p.mark');


textMarkElems.forEach(el => {
    el.style.backgroundColor = 'chartreuse';
    el.style.color = 'white';
    el.style.fontWeight = 'bold';
    el.style.fontSize = '18px';
});

const textMark1 = textMarkElems[0];
console.log(textMark1);
console.log(textMark1.attributes);
for(let i of textMark1.attributes){
    console.log(i.name, '=', i.value);
}
console.log(textMark1.hasAttribute('label'));
console.log(textMark1.hasAttribute('isSelected'));
console.log(textMark1.getAttribute('label'));
textMark1.setAttribute('isSelected','true');
console.log(textMark1.attributes);
//textMark1.setAttribute('class','class1 class2');

console.log('--------------');
console.log(textMark1.classList);
for(let i of textMark1.classList){
    console.log(i);
}
textMark1.classList.add('warmText');
console.log(textMark1.classList.contains('warmText'));
textMark1.classList.remove('warmText');
console.log(textMark1.classList);



/*
Получение элементов:
getElementById('idName')
getElementsByName('class')
getElementsByClassName('class')
getElementsByTagName('tag')

querySelector('cssSelector')
.class  #id 

querySelectorAll('cssSelector')

*/
