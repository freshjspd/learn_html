const btn = document.getElementById('btn');
let isHello = true;
btn.onclick = function(){
    isHello == true ? alert('Hello') : alert('Bye');
    isHello = !isHello;
}

