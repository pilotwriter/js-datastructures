//size,head,insert,removeAt,insertAt,indexOf(),pop

function LinkedList(){
    function Node(val)  {
        this.val = val;
        this.next = null;
    }

    var length = 0;
    var head = null;
    var tail = null;



    this.pushBack = (val) =>{

        if(length === 0 ){
            head = new Node(val);
            tail = head;
            
        }
        else{
            tail.next = new Node(val);
            tail = tail.next;
            
            
        }
        length++;
    }

this.indexOf = (val) => {
    if(length === 0){
emptyListException();    }
    
    let currentNode = head;
    for(let i = 0; i < length; i++){
        if(currentNode.val === val){
            return i;
        } 
        else{
            currentNode = currentNode.next;
            if(i === length-1){
                return "No result found on this list!"
            }
        }
    }
}
let emptyListException = () =>{
    throw "this  is an empty list!";
}

this.removeByValue = (val) => {
    if(length === 0){
emptyListException();  
  }
  let current = head;
  for(let i = 0; i < length; i++){

    // if there is only one element
    if(length === 1)
    {
        if(val === head.val){
            head = null;
            tail = null;
            break;
        }
        else{
            console.log("no result found!");
        }     
    }
    //if the last one is going to be deleted!
    else if(current === tail){

        if(val === current.val){
            newTail = this.elementAt(i-1);
            tail = newTail;
            tail.next = null;
            break;
        }
    }
    //  if it needs to delete from middle of somewhere
    else if (current.val === val){
        if(current === head){
            head = head.next;
            break;
        }
        else{ 
         newNode = this.elementAt(i - 1);
         console.log(i);
         newNode.next = this.elementAt(i + 1);
         console.log((newNode.next).val)
         break;
        }
        
    }
    else{
        current = current.next;

    }

  }

}

this.elementAt = (index) => {

    if(index >= length){
        throw "out of range";
    }

    let current = head;
    for(let i = 0; i < index; i++){
        current = current.next;
    }
    return current;

}

this.pop = () => {
    if(length === 0){
        throw "nothing to pop!"
    }
    else if(length === 1){
        head = null;
        tail = null;
        length--;
    }
    else{
        let newTail = this.elementAt(length -2);
        newTail.next = null;
        tail = newTail;        
        length--;

    }


}


    this.removeAt = (index) => {
            if(index >= length){
                throw "Index out of range";
            }

            if(index === 0){
                if(length === 1){
                    head = null;
                    tail = null;

                }
                else{
                    head = head.next;

                }
            }
            //if he tries to delete tail
            else if(index === length-1) {
                if(length === 1 ){
                    head = null;
                    tail = null;
                }
                else{
                    let newTail = this.elementAt(index-1);
                    newTail.next = null;
                    tail = newTail;
                }


            }

            else{
                let nodeBefore = this.elementAt(index-1);
                let nodeAfter = (nodeBefore.next).next
                nodeBefore.next = nodeAfter;
            }

    length--;
    }



    this.size = () => {
        return length;
    };

    this.head = function(){
        return head;
    }
    this.tail = () =>{
        return tail;
        
    }
    this.toString =  () => {
        let str ="[ ";
        let current =head;
        while(current !== null){
            str = str + current.val + (current === tail ? "" : ", " );
            current = current.next;
        }
        str += " ]";
        return str;
        
    }


}
let linkedList = new LinkedList();
linkedList.pushBack("ali");
linkedList.pushBack("veli");
linkedList.pushBack("49");
linkedList.pushBack("50");
linkedList.removeByValue("50");
console.log(linkedList.toString());

