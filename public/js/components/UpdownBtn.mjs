import { blogData } from "../module/blogData.mjs";
import { addEvents } from "../module/addEvent.mjs";
class UpdownBtn{
   constructor( id ){
      this.id = id;
   }

   makeDom(){
      const {top, bottom} = blogData.svgData;
      const btnObj = {
         "top" : {
            "btnId" : "goTopBtn",
            "alterText" : "TOP",
            "svgCode" : top
         },
         "bottom" : {
            "btnId" : "goBottomBtn",
            "alterText" : "BOTTOM",
            "svgCode" : bottom
         }
      }

      document.querySelector("#updownBtn").innerHTML = Object.values(btnObj).map( value =>{
         const { btnId, alterText, svgCode } = value;
         return (`
            <button id=${btnId}>
               <span>${alterText}</span>
               ${svgCode}
            </button>
         `);
      }).join("");
   }
   
   smoothBehavior(){
      document.querySelectorAll('#updownBtn button').forEach( btns =>{
         const goUPDOWN = () =>{
            const goTop = ()=>{
               window.scrollTo({
                  top:0,
                  behavior:'smooth'
               });
            };

            const goBottom = ()=>{
               window.scrollTo({
                  top:document.body.scrollHeight,
                  behavior:'smooth'
               });
            };

            switch(btns.id){
               case "goTopBtn" : goTop(); break;
               case "goBottomBtn" : goBottom(); break;
            }
         }
         
         addEvents.eventListener( btns, "click", goUPDOWN );
      })
   }
}

const updownBtns = new UpdownBtn( "updownBtns" );

export { updownBtns };