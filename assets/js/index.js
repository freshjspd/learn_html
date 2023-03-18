const user = {
    img: 'https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300',
    fullName: 'Kate Adson',
    stats: {
        fb: '800',
        insta: '1000',
        tel: '950'
    }
};


const userCardsEl = document.getElementById('userCards');

const card = document.createElement('div');
card.classList.add('card_container');

//img
const imgContainer = document.createElement('div');
imgContainer.classList.add('image_container');

const imgEl = document.createElement('img');
imgEl.setAttribute('src', user.img);
imgEl.setAttribute('alt', 'photo');

imgContainer.append(imgEl);
card.append(imgContainer);

//info

const infoContainer = document.createElement('div');
infoContainer.classList.add('info_container');

const userFullName = document.createElement('p');
userFullName.classList.add('user_fullname');
userFullName.innerText = user.fullName;
infoContainer.append(userFullName);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button_container');

const statEl1 = document.createElement('div');
statEl1.classList.add('stat', 'fb');
statEl1.innerText = user.stats.fb;

const statEl2 = document.createElement('div');
statEl2.classList.add('stat', 'insta');
statEl2.innerText = user.stats.insta;

const statEl3 = document.createElement('div');
statEl3.classList.add('stat', 'tel');
statEl3.innerText = user.stats.tel;

buttonContainer.append(statEl1);
buttonContainer.append(statEl2);
buttonContainer.append(statEl3);

infoContainer.append(buttonContainer);

card.append(infoContainer);

// card => body
userCardsEl.append(card);

