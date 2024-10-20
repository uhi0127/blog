class Queue{
   constructor( id ){
      this.id = id;
      this._qList = [];
   }

   get qList(){
      return this._qList;
   }
   

   init(){
      this._qList = [];
   }

   pushItem( items ){
      this._qList.push( items );
   }

   frontItem(){
      return this._qList.shift();
   }
   getLength(){
      return this._qList.length;
   }
}

export { Queue };