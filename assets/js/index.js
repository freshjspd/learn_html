const user = {
    name: "John",
    surname: "Addon",
    email: "john@mail.com",
    age: 20,
    isMale: true,
    langs: ['ua', 'eng'],
    car: {model: 'xModel', color: 'black'}
};

// добавляем в хранилище в виде строки
const userJSON = JSON.stringify(user);
localStorage.setItem('userJohn', userJSON);

// забираем из хранилища для работы
const gettedUserFromStrorage = localStorage.getItem('userJohn');
const gettedUser = JSON.parse(gettedUserFromStrorage);
console.log('user from strorage', gettedUser);


/*
const ranges = document.querySelectorAll('input[type="range"]');
ranges.forEach(el => el.oninput = updBodyColor);
function updBodyColor(event){
    //const color = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
    let color = "rgb(";
    ranges.forEach((el, index, list) =>
        index == list.length -1 ? 
            color += el.value + ')':
            color += el.value + ','
    );
    document.body.style.backgroundColor = color;
}
*/
