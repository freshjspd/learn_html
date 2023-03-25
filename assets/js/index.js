const [widthElem, heightElem] = document.querySelectorAll('h1');
const inputEl = document.querySelector('input[type="text"]');

window.onload = logEvent;
window.onresize = logEvent;
window.onkeypress = logEvent;
window.onclick = logEvent;
window.ondblclick = logEvent;

inputEl.oninput = logEvent;
inputEl.onchange = logEvent;
inputEl.onfocus = logEvent;
inputEl.onblur = logEvent;

function logEvent(event){
    console.log(event);
}