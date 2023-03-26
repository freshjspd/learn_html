const loginVal = document.querySelector("input[type='text'");
const passwordVal = document.querySelector("input[type='password'");
const btn = document.querySelector("input[type='submit'");
const form = document.querySelector("form");

const regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
passwordVal.setAttribute('pattern',regPassword.toString());

const data = document.forms[0];
const singKeys = ['login', 'password'];

form.addEventListener("submit", sendData);

function sendData(event){
    const user = {};
    for(let i of singKeys){
        user[i] = data[i].value;
    }
    localStorage.setItem('newUser', JSON.stringify(user));
    
}

