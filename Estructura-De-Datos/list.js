class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    constructor(head = null) {
        this.head = head
    }

    getLastElement() {
        let aux = this.head;
        if (aux == null) {
            return null;
        }
        while (aux.next != null) {
            aux = aux.next;
        }
        return aux;
    }

    push(element) {
        if (this.head == null) {
            let nodeAux = new Node(element);
            this.head = nodeAux;
        } else {
            let nodeAux = new Node(element);
            let lastNode = this.getLastElement()
            lastNode.next = nodeAux;
        }
    }

    printList() {
        let aux = this.head;
        while (aux != null) {
            console.log(aux.data)
            aux = aux.next
        }
    }

    length() {
        let aux = this.head
        let count = 0;
        while (aux != null) {
            count++;
            aux = aux.next
        }
        return count;
    }
}


let myList = new LinkedList()
let arr = [1, 3, 5];
let nodeAux = new Node(arr[0]);
myList.head = nodeAux
let lastNode = nodeAux;
for (let index = 1; index < arr.length; index++) {
    nodeAux = new Node(arr[index])
    lastNode.next = nodeAux;
    lastNode = nodeAux;
}