const board = document.getElementById("board");
const count = 100;
const colors = ['greenyellow', 'green', 'red', 'yellow', 'blue', 'cyan', 'fuchsia', 'magenta'];

for(let i=0; i<count; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor(colors);
    });
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'gray';
    });
}

function getRandomColor(arrayColors){
    const index = Math.floor(Math.random() * arrayColors.length);
    return arrayColors[index];
}