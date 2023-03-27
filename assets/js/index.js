const IMGS = [
    'https://kaboompics.com/cache/d/9/a/9/5/d9a95053e9df780b5922013e4840b88769687f6c.jpeg', 
    'https://kaboompics.com/cache/6/b/3/8/d/6b38d175fac8e9fcfdfa438ac0e52e063278ec12.jpeg', 
    'https://kaboompics.com/cache/b/7/3/0/d/b730dbb76e707683aa973c77c2e79e9c0caac420.jpeg', 
    'https://kaboompics.com/cache/9/f/f/d/2/9ffd225edb872ae0e21302ea924955dd7098f40d.jpeg'
];

const COLORS = [
    ['#7D200F', '#A83520'],
    ['#A5826F','#300C0E'],
    ['#66A6D0','#00489A'],
    ['#87BFD0','#01507B']
];

const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainbar = document.querySelector('.mainbar');
const controls = document.querySelector('.controls');
const colorBoxes = document.querySelectorAll('.box');
const imgBoxes = document.querySelectorAll('.img-box');
const upButton = document.querySelector ('.up-button');
const downButton = document.querySelector ('.down-button');

const slidesCount = 4;
let activeSlideIndex = 2;

colorBoxes.forEach( (i, index) => {
    console.log('index ', index);
    const indexColor = slidesCount - index - 1;
    console.log('index color ', indexColor);
    i.style.background = `linear-gradient(to left,${COLORS[indexColor][0]}, ${COLORS[indexColor][1]})`;
});

imgBoxes.forEach( (i, index) => {
    i.style.backgroundImage = `url(${IMGS[index]})`;
});

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up');
})

downButton.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const heigth = container.clientHeight;

    mainbar.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;

}
