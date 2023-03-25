class Item{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addToStart(value){
        const newHead = new Item(value, this.head, null);
        if(this.head){ this.head.prev = newHead; }
        this.head = newHead;
        if(!this.tail) { this.tail = newHead; }
        this.size ++;
    }
    addToEnd(value){
        const newTail = new Item(value, null, this.tail);
        if(this.tail){ this.tail.next = newTail;}
        this.tail = newTail;
        if(!this.head){ this.head = newTail;}
        this.size++;
    }
    addAfterNode(node, value){
        if(this.tail == node){ this.addToEnd(value); return;}
        const newItem = new Item(value, node.next, node);
        node.next = newItem;
        newItem.next.prev = node;
        this.size++;
    }
    [Symbol.iterator](){
        let el = this.head;
        return{
            next(){
                if(el){
                    const value = el.value;
                    el = el.next;
                    return{
                        value: value,
                        done: false,
                    }
                } else{
                    return{
                        done: true,
                    }
                }
            }
        }
    }
}

let list1 = new List();
list1.addToStart(5);
list1.addToStart('hello');
list1.addToStart({name:'Masha'});
list1.addToStart(100);

/*
for(let i of list1){
    console.log(i);
}
*/