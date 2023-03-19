const btn = document.getElementById('btn');

btn.addEventListener('click', sayHello);

function sayHello(event){
    console.log(event);
    alert('Hello, user !!');
    btn.removeEventListener('click', sayHello);
    btn.addEventListener('click', sayBye);
}

function sayBye(event){
    console.log(event);
    alert('Bye, user:)');
    btn.removeEventListener('click', sayBye);
    btn.addEventListener('click', sayHello);
}

