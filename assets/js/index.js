const cont = document.querySelector('button');
cont.onclick = function(){
    location.assign(`${location.origin}/assets/pages/contacts.html`);
}

//location
// origin - index.html обращение к корню
// pathname - путь к текущей страницы
// search - параметры строки запроса
// href - полная ссылка (адрес)

// методы 
// reload()  - перезагрузка страницы
// replace() - старая страница не добавляется
// assign() - добавится новая страница