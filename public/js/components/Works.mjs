import { blogData } from "../module/blogData.mjs";
import { addEvents } from "../module/addEvent.mjs";
import { Queue } from "../module/Queue.mjs";
import { DCLL } from "../module/DoublyCircularLinkedList.mjs";
import { List } from "../module/List.mjs";
class Works{
   constructor( id ){
      this.id = id;
      this.slide = new Queue( "slide" );
      // this.circular = new Circular( "slide" );
   }


   // 리스트의 모든 노드 출력
   allDCLL(){
      if (!DCLL.head) {
         console.log('List is empty');
         return;
      }
      let current = DCLL.head;

      this.slide.init();
      do {
         this.slide.pushItem( current.id);
         current = current.next;
      } while (current !== DCLL.head);
   }

   makeSlideList(){
      blogData.works.forEach( work => {
         DCLL.append( work );
      })
      
      this.allDCLL();
      // this.makeSlide();
      
      // list.append( list.head.id );
      // list.remove( list.head.id)
      // list.allList();
      // this.makeSlide();
      
      // list.append( list.head.id );
      // list.remove( list.head.id)
      // list.allList();
      
      // list.append( list.head.id );
      // list.remove( list.head.id)
      // list.allList();
      
      // list.append( list.head.id );
      // list.remove( list.head.id)
      // list.allList();
   }

   makeSlide(){
      const workContainer = document.querySelector("#workContainer");
      workContainer.innerHTML = this.slide.qList.map( (work, i)=>{
         const { id, name, projectName, thumbnail, url } = work;
         return(`
            <li id="list_${projectName}" class="list_${projectName}" style= " left : ${workContainer.clientWidth * i}px;">
               <h3 class="projectName">${name}</h3>
               <div class="projectThumbnail" style= "background-image: url(../public/img/thumbnail/${thumbnail});" ></div>
               <div class="description">
                  <a href="${url}" target="_blank"> 바로가기 </a>
               </div>
            </li>
         `);
      }).join("");
   }

   makeBtn(){
      const btnObj = {
         "prev" : {
            "classNames" : "prev_btn",
            "bg_url" : "../img/circle_chevron_left_solid.svg",
         },
         "next" : {
            "classNames" : "next_btn",
            "bg_url" : "../img/circle_chevron_right_solid.svg",
         }
      };

      document.querySelector("#hiWorks .button_container").innerHTML = Object.values(btnObj).map(values =>{
         const { classNames, bg_url } = values;
         return(`
            <button id=${classNames} class=${classNames} style= "background-image: url(../public/img/${bg_url});"></button>
         `)
      }).join("");
   }

   makeDom(){
      this.makeSlideList();
      this.makeBtn();
   }

   resizes(){
      const workSliderResize = ()=>{
         this.makeSlide();
      }

      workSliderResize();
      addEvents.eventListener( window, "resize", workSliderResize);
   };

   clicks(){
      let i = 0;
      const slideLength = this.slide.getLength();
      document.querySelectorAll('.button_container button').forEach( btns =>{

         const goSlide = () =>{
            const goPrev = ()=>{
               // setTimeout(()=>{
               //    this.slide.
               // },1000)
            };

            const goNext = ()=>{
               document.querySelector("#workContainer").style["transform"] = `translateX(${(--i%slideLength)*100}%)`;
               // setTimeout(()=>{
               //    DCLL.append( DCLL.head.id );
               //    DCLL.remove( DCLL.head.id);
               //    this.allDCLL();
               //    this.makeSlide();
               //    document.querySelector("#workContainer").style["transform"] = `translateX(0)`;
               // },500);
            };

            switch(btns.id){
               case "prev_btn" : goPrev(); break;
               case "next_btn" : goNext(); break;
            }
         }
         
         addEvents.eventListener( btns, "click", goSlide );
         // console.log(btns)
      })
   }
}

const works = new Works( 'works' );

export { works };