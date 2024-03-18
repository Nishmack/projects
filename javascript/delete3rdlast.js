var remove3rdlastElem = function(head) {
let length=0;
let current = head;
if(current){
    length++;
    current=current.next;
}
if(length<3){
    return head;
}
let prev = null;
current = head;
for(i=0;i<length-3;i++){
    prev = current;
    current=current.next;
}
prev.next = current.next;
}