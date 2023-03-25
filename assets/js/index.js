const [widthElem, heightElem] = document.querySelectorAll('h1');

window.addEventListener("resize", fun);
window.addEventListener("load", fun);

//window.onresize = fun;

function fun(event){

    //window.innerWidth - внутреняя ширина браузера (не вьюпорт)
    widthElem.innerText = `width=${window.outerWidth}px`;
    heightElem.innerText = `height=${window.outerHeight}px`;
}