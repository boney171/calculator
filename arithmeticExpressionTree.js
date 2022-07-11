`import {Stack} from '../Stack.js';`
class TreeNode{
    constructor(data,key){
        this.data = data;
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class arithmeticExpression{
    constructor(expression){
        this.infixExpression = expression;
        this.root = null;
    }

    priority( op ){
        let priority = 0;
        if( op == '('){
            priority = 4;
        }
        else if( op == '^'){
            priority = 3;
        }
        else if ( op == '*' || op == '/'){
            priority = 2;
        }
        else if( op == '+' || op == '-'){
            priority = 1;
        }
        return priority;
    }
    
    infix_to_postfix(){
        let s = new Stack();
        let c = '';
        let postfix = '';
        for( let i = 0; i < this.infixExpression.length; i++){
            c = this.infixExpression[i];
            if(c == ' '){
                continue;
            }
            if( c == '+' || c == '-' || c == '*' || c == '/' 
            || c == '(' || c == ')' || c == '^'){
                if( c == '('){
                    s.push(c);
                }else if( c == ')'){
                    while(s.top() != '('){
                        postfix += s.peek();
                        s.pop();
                    }
                    s.pop();
                }
                else{
                    while(!s.isEmpty() && this.priority(c) <= this.priority(s.peek())){
                        if(s.peek() == '('){
                            break;
                        }
                        postfix += s.peek();
                        s.pop();
                    }
                    s.push(c);
                }
            }
            else{
                postfix += c;
            }
        }
        while(!s.isEmpty()){
            postfix += s.peek();
            s.pop();
        }
        return postfix;
    }

    buildTree(){
        let s = new Stack();
        let letter = 'a';
        let numb = ' ';
        let postFix = this.infix_to_postfix();
        for(let i = 0; i < postFix.length; i++){
            numb = postFix[i];
            if(numb == '*' || numb == '-' || numb == '+' || numb == '/' || numb == '^'){
                const newRoot = new TreeNode(numb, letter + i);
                newRoot.right = s.peek();
                s.pop();
                newRoot.left = s.peek();
                s.pop();
                s.push(newRoot);
            }else{
                const newLeaf = new TreeNode(numb, letter + i);
                s.push(newLeaf);
            }
        }
        this.root = s.peek();
        s.pop();
    }

    infix(){
        infix(this.root);
    }

    infix(root){
       if(root == null){
        return;
       }else{
        this.infix(root.left);
        console.log(root.data);
        this.infix(root.right);
       }
       return;
    }

    prefix(root){
       if(root == null){
        return;
       }else{
        console.log(root.data);
        this.prefix(root.left);
        this.prefix(root.right);
       }
       return;
    }

    postfix(root){
        if(root == null){
         return;
        }else{
         this.postfix(root.left);
         this.postfix(root.right);
         console.log(root.data);
        }
        return;
     }
    
};

let test = new arithmeticExpression('3^2+5-9');
let postfix = test.infix_to_postfix();
test.buildTree();
test.postfix(test.root);
