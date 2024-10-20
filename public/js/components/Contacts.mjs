import { blogData } from "../module/blogData.mjs";

class Contacts{
   consturctor( id ){
      this.id = id;
   }

   makeDom(){
      for( let contact in blogData.contacts ){
         document.querySelector("#hiContact .side").innerHTML += `
            <div id=${contact}>
               <div id="${contact}_HeadBox">
                  <h3>${contact.toUpperCase()}</h3>
               </div>
               <div id="${contact}_ValueBox"></div>
            </div>
         `;
         
         for(let value in blogData.contacts[contact]){
            for(let value2 in blogData.contacts[contact][value]){
               switch( contact ){
                  case "sns" : 
                     document.querySelector(`#hiContact .side #${contact} #${contact}_ValueBox`).innerHTML += `
                        <a href="${blogData.contacts[contact][value][value2]}">${value2}</a>
                        <p class="${value2}">${value2}</p>
                     `;
                     break;
                  
                  default :
                     document.querySelector(`#hiContact .side #${contact} #${contact}_ValueBox`).innerHTML += `
                        <p class="${value2}">${blogData.contacts[contact][value][value2]}</p>
                     `;
                     break;
               }
            }
         }
      }
      
   }
}

const contacts = new Contacts( 'contacts' );
export { contacts };