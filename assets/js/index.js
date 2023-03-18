const user = {
    img: 'https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300',
    fullName: 'Kate Adson',
    stats: {
        fb: '800',
        insta: '1000',
        tel: '950'
    }
};

function createUserPhoto(userImgSrc){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image_container');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', userImgSrc);
    imgEl.setAttribute('alt', 'photo');
    imgContainer.append(imgEl);
    return imgContainer;
}

function createBtnContainer(stats){
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button_container');

    const statEl1 = document.createElement('div');
    statEl1.classList.add('stat', 'fb');
    statEl1.innerText = stats.fb;

    const statEl2 = document.createElement('div');
    statEl2.classList.add('stat', 'insta');
    statEl2.innerText = stats.insta;

    const statEl3 = document.createElement('div');
    statEl3.classList.add('stat', 'tel');
    statEl3.innerText = stats.tel;

    buttonContainer.append(statEl1);
    buttonContainer.append(statEl2);
    buttonContainer.append(statEl3);
    return buttonContainer;

}

function createUserFullName(fullName){
    const userFullName = document.createElement('p');
    userFullName.classList.add('user_fullname');
    userFullName.innerText = fullName;
    return userFullName;
}


const userCardsEl = document.getElementById('userCards');

const card = document.createElement('div');
card.classList.add('card_container');

const imgContainer = createUserPhoto(user.img);
card.append(imgContainer);

const infoContainer = document.createElement('div');
infoContainer.classList.add('info_container');
const userFullName = createUserFullName(user.fullName);
infoContainer.append(userFullName);
const buttonContainer = createBtnContainer(user.stats);
infoContainer.append(buttonContainer);
card.append(infoContainer);

// card => body
userCardsEl.append(card);

