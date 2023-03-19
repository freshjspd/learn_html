const boxes = document.querySelectorAll('.box');

boxes.forEach(b => b.addEventListener('click', makeColor1));

function makeColor1(event){
    //console.log(event.target);
    //console.log(this);
    this.style.backgroundColor = 'black';
    this.removeEventListener('click', makeColor1);
    this.addEventListener('click', makeColor2);
}

function makeColor2(event){
    this.style.backgroundColor = 'white';
    this.removeEventListener('click', makeColor2);
    this.addEventListener('click', makeColor1);
}