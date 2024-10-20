import { blogData } from "../module/blogData.mjs";
import { addEvents } from "../module/addEvent.mjs";
import { Queue } from "../module/Queue.mjs";

class Skill{
   constructor( id ){
      this.id = id;
      this.newImgs = null; 
      this.gapX = -100; 
      this.gapY = -250; 
      
      this.skillArr = new Queue( 'skillArr' ); 
      this._rotateRadius = 1;
      this._degree = 0;
   }
   
   get rotateRadius(){
      return this._rotateRadius;
   }

   /**
    * @param {number} radius
    */
   set rotateRadius( radius ){
      this._rotateRadius = radius;
   }

   get degree(){
      return this._degree;
   }

   set degree( degrees ){
      this._degree = degrees;
   }

   makeClass(){
      return(
         class SkillIcons{
            constructor( id, imgSrc ){
               this.id = id;
               this.imgSrc = imgSrc;
               
               this._leftV = 0;
               this._topV = 0;
            }
   
            get leftV(){
               return this._leftV;
            }
            set leftV( position ){
               this._leftV = position;
            }
            
            get topV(){
               return this._topV;
            }
            set topV( position ){
               this._topV = position;
            }
         }
      );
   }
   
   makeDom(){
      const skillIcons = this.makeClass();
      blogData.skills.forEach( skills =>{
         const { skill, imgSrc } = skills;
         this.skillArr.pushItem( new skillIcons( skill, imgSrc ) );
      });

      document.querySelector("#skillRotate ul").innerHTML += this.skillArr.qList.map(skills =>{
         const { id, imgSrc }= skills;
         return (`
            <li id=${id}Box>
               <div class="logo" title=${id} style="background-image:url(${imgSrc})";></div>
            </li>
         `);
      }).join("");

      document.querySelector('.skillInfoInner p').innerHTML = blogData.skills[0].description;
   }
   
   // ** 반경 조절
   changeRadius(){
      this.rotateRadius = (document.querySelector(".skillInfoBox").clientWidth /2) + document.querySelector(`#skillRotate li[id$="Box"]`).clientWidth;
   }

   // 스킬 아이콘 회전
   iconRotate(){
      const skillInfoBox = document.querySelector(".skillInfoBox");
      const rotateIcons = ()=>{
         this.skillArr.qList.forEach( (list,i,arr) => {
            list.leftV = 
               `${ ( skillInfoBox.clientWidth / 2 )
                  + Math.cos( ( 2*Math.PI / arr.length )*i + this.degree ) * this.rotateRadius 
               }`;
   
            list.topV = 
               `${ ( skillInfoBox.clientHeight / 2 )
                  + Math.sin( ( 2*Math.PI / arr.length )*i + this.degree ) * this.rotateRadius 
               }`;

            document.querySelectorAll(`#skillRotate li[id$="Box"]`)[i].style.left = `${list.leftV}px`;
            document.querySelectorAll(`#skillRotate li[id$="Box"]`)[i].style.top = `${list.topV}px`;
         });

         this.degree += 0.002;
         setTimeout(rotateIcons,1000/60);
      }
      setTimeout(rotateIcons,1000/60);
      addEvents.eventListener(window, "resize",()=>{
         this.rotateRadius = (skillInfoBox.clientWidth /2) + document.querySelector(`#skillRotate li[id$="Box"]`).clientWidth;
      })
   }

   clickIcons(){
      document.querySelectorAll('#skillRotate li .logo').forEach( btns =>{
         const iconClick = evt =>{
            document.querySelectorAll('#skillRotate li .logo').forEach( div => { div.style["background-color"] = "var(--bs-success-bg-subtle)"});
            
            evt.currentTarget.style["background-color"] = "var(--bs-indigo)";
            
            // ** description
            document.querySelector('.skillInfoInner p').innerHTML = `${ blogData.skills.filter( skill => skill.skill === evt.currentTarget.title).shift().description}`;
         }
      
         addEvents.eventListener(btns,"click",iconClick);
      });
   }
}

const skills = new Skill( "skills" );

export { skills };