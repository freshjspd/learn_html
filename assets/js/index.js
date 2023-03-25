const user = {
    name: "John",
    surname: "Addon",
    email: "john@mail.com",
    age: 20,
    isMale: true,
    langs: ['ua', 'eng'],
    emptyArray: [],
    emptyObject: {},
    car: {model: 'xModel', color: 'black'},
    fieldUndefined: undefined,
    fieldNull: null,
    hello: function(){console.log('hello');}
};

// 1  (client)
userJSON = JSON.stringify(user);
console.log(userJSON);
// 2 (server)
gettedUser = JSON.parse(userJSON);
console.log(gettedUser);

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
