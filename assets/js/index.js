const boxes = document.querySelectorAll('.box');

boxes.forEach(b => b.addEventListener('click', makeColor1));

function makeColor1(event){
    this.classList.remove('boxStyle2');
    this.classList.add('boxStyle1');
    this.removeEventListener('click', makeColor1);
    this.addEventListener('click', makeColor2);
}

function makeColor2(event){
    this.classList.remove('boxStyle1');
    this.classList.add('boxStyle2');
    this.removeEventListener('click', makeColor2);
    this.addEventListener('click', makeColor1);
}