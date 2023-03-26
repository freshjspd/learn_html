/*
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
    
    //const user = {
    //    login: loginVal.value,
    //    password: passwordVal.value
    //};
    
    localStorage.setItem('newUser', JSON.stringify(user));
    
}
*/

//flags g,m,i

const reg1 = /a+/gm;
//const reg1 = new RegExp('a+', 'gm');
let str1 = 'adf aaa as aaaaaaaaa aasd  ddssaAAAA  aasd aa';
let str2 = 'fffff werwerwer     ewwrwer';

//проверка подходит или нет??
const isDone = reg1.test(str1);
console.log(isDone);
console.log(reg1.test(str2));

//если нужны результаты
const res1 = str1.match(reg1);
console.log(res1);

const res2 = [...str1.matchAll(reg1)]
console.log(res2);





