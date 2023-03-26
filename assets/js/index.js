const loginVal = document.querySelector("input[type='text'");
const passwordVal = document.querySelector("input[type='password'");
const btn = document.querySelector("input[type='submit'");
const form = document.querySelector("form");

const data = document.forms[0];
const singKeys = ['login', 'password'];

form.addEventListener("submit", sendData);

function sendData(event){
    const user = {};
    for(let i of singKeys){
        user[i] = data[i].value;
    }
    /*
    const user = {
        login: loginVal.value,
        password: passwordVal.value
    };
    */
    localStorage.setItem('newUser', JSON.stringify(user));
    
}

