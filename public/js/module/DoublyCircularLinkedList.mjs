import { List } from "./List.mjs"
class DoublyCircularLinkedList {
   constructor( id ) {
      this.id = id;
      this.head = null;
      this.tail = null;
   }

   // 리스트의 끝에 노드 추가
   append(data) {
      const newNode = new List(data);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
         this.head.next = this.head;
         this.head.prev = this.head;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         newNode.next = this.head;
         this.head.prev = newNode;
         this.tail = newNode;
      }
   }

   // 리스트의 시작에 노드 추가
   prepend(data) {
      const newNode = new lists(data);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
         this.head.next = this.head;
         this.head.prev = this.head;
      } else {
         newNode.next = this.head;
         newNode.prev = this.tail;
         this.head.prev = newNode;
         this.tail.next = newNode;
         this.head = newNode;
      }
   }

   // 리스트에서 주어진 데이터를 가진 첫 번째 노드 삭제
   remove(data) {
      if (!this.head) return;

      let current = this.head;
      do {
         if (current.id === data) {
               if (current === this.head && current === this.tail) {
                  this.head = null;
                  this.tail = null;
               } else {
                  current.prev.next = current.next;
                  current.next.prev = current.prev;
                  if (current === this.head) {
                     this.head = current.next;
                  }
                  if (current === this.tail) {
                     this.tail = current.prev;
                  }
               }
               return;
         }
         current = current.next;
      } while (current !== this.head);
   }
}
const DCLL = new DoublyCircularLinkedList( "DCLL" );
export { DCLL };