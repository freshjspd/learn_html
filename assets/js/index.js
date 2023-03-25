class Stack{
    constructor(maxSize = 10){
        this.size = 0;
        this.maxSize = maxSize;
    }
    push(value){
        if(this.size == this.maxSize){
            throw new Error('Стек переполнен!');
        }
        this[this.size] = value;
        this.size++;
    }
    pop(){
        if(this.size == 0){
            throw new Error('Стек пуст!');
            return;
        }
        const value = this[this.size];
        delete this[this.size--];
        return value;
    }
}

const stack1 = new Stack(5);



