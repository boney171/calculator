class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length == 0){
            return "Underflow";
        }
        return this.items.pop();
    }
    size(){
        return this.items.length;
    }
    peek(){
        let index = this.items.length -1;
        return this.items[index];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printStack(){
        var str = '';
        for( var i = 0; i < this.items.length; i++){
            str += this.items[i] + ',';
        }
        return str;
    }
}

