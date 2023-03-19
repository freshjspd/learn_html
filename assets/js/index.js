const btn = document.getElementById('btn');
/*

btn.onclick = function(){
    alert('Hello!');
};
*/

btn.onclick = sayHello;

function sayHello(){
    alert('Hello!');
}

function sayBye(){
    alert('Bye!');
}
