const board = document.getElementById("board");
const count = 100;
for(let i=0; i<count; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
}