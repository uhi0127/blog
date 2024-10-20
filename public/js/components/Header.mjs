import { blogData } from "../module/blogData.mjs";
import { addEvents } from "../module/addEvent.mjs";

class Header{
   constructor( id ){
      this.id = id;
   }

   makeDom(){
      document.querySelector("#headerNav ul").innerHTML = blogData.sect.map( names =>{
         const { id, text, icons } = names;
         return(`
            <li>
               <a href= "#hi${text}"> 
                  <p class="headerIcons">${icons}</p>
                  <span class="headerText">${text.toUpperCase()}</span>
               </a>
            </li>
         `);
      }).join("");
   };

   // toggle버튼 클릭 이벤트
   smoothBehavior(){
      const toggle = document.querySelector('#toggle');
      const hiHeader = document.querySelector("#hiHeader");

      const toggleBtnClick = () =>{
         toggle.classList.toggle( "active" );
         document.querySelector("#bgBox").classList.toggle( "mobile" );
         // if( toggle.classList.contains("active") ){
         //    addEvents.eventListener( hiHeader,"click",(evt)=> {
         //       console.log(evt.target.id === "toggle")
         //       /* if( evt.target){
         //          toggle.classList.toggle( "active" );
         //       }
         //       return 0; */
         //    });
         // }
      };

      if( window.innerWidth < 1024 ){
         addEvents.eventListener( toggle,"click",toggleBtnClick );
      }
   }

   // scroll event
   scrolls(){
      const hiHeader = document.querySelector('#hiHeader');
      const toggle = document.querySelector('#toggle');
      
      const scrollEventCallback = () =>{
         if( window.scrollY <= hiHeader.clientHeight ){
            hiHeader.style.position = "absolute";
         }else{
            hiHeader.style.position = "fixed";
         }

         if( window.innerWidth < 768 ){
            if( window.scrollY >= hiHeader.clientHeight){
               toggle.classList.add("fixed");
               toggle.classList.remove("static");
            }else{
               toggle.classList.add("static");
               toggle.classList.remove("fixed");
            }
         }
      };
      addEvents.eventListener( window,"scroll",scrollEventCallback );
   }

   // wheel event
   wheels(){
      const hiHeader = document.querySelector('#hiHeader');

      const wheelEventCallback = (evt) =>{
         if(evt.deltaY<0){ //위로
            hiHeader.classList.remove('hide');
            hiHeader.classList.add('show');
         }else{ //아래로
            hiHeader.classList.remove('show');
            hiHeader.classList.add('hide');
         };
      };

      addEvents.eventListener( window,"wheel",wheelEventCallback );
   }

   // resize event
   resizes(){
      const toggle = document.querySelector('#toggle');
      const headerNav = document.querySelector('#headerNav');

      const resizeEventCallback = () => {
         if(window.innerWidth < 768){
            headerNav.className = 'show';
            toggle.classList.add("static");
         }else{
            headerNav.className = 'hide';
            toggle.classList.remove("static");
            toggle.classList.remove("fixed");
         }
      };
      
      addEvents.eventListener( window,"resize",resizeEventCallback );
   }
}

const header =  new Header( "header ");
export { header };