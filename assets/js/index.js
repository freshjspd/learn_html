const colors = ['greenyellow', 'orange', 'yellow', 'cyan', 'fuchsia'];
const menuBar = document.querySelector('.container');
const items = document.querySelectorAll('.item');

let indexActive = 0;
let activeEl = menuBar[indexActive];
document.body.style.backgroundColor = colors[indexActive];

items.forEach( (i, index) => {
    i.style.backgroundColor = colors[index];
    i.addEventListener('click', () => {makeActive(i, index)});
});

function makeActive(i, index){
    if(activeEl == i) return;
    if(activeEl){activeEl.classList.remove('active');}
    i.classList.add("active");
    document.body.style.backgroundColor = colors[index];
    indexActive = i;
    
}