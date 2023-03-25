function* generator1(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const player1 = generator1();
const player2 = generator1();

player1.next(); // 1
player1.next(); // 2
player2.next(); // 3

player2.next(); // 1

