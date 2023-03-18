//let containerEl = document.getElementById('container');
let containerEl = 
document.querySelector('#container');
containerEl.style.backgroundColor = 'yellow';


//let redTextEl = document.querySelector('.redText');

let redTextEl = 
document.querySelector('div#container > p.redText');
redTextEl.style.color = 'red';
redTextEl.style.fontSize = '20px';
redTextEl.style.fontWeight = 'bold';

let textMarkElems = 
document.querySelectorAll('p.mark');
console.log(textMarkElems);
console.log('-----------------');

textMarkElems.forEach(el => {
    el.style.backgroundColor = 'chartreuse';
    el.style.color = 'white';
    el.style.fontWeight = 'bold';
    el.style.fontSize = '18px';
    console.log(el.classList);
    console.log(el.attributes);
});

//let textMarkEl2 =
//document.getElementsByClassName('mark'); 
//console.log(textMarkEl2);


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
