import { blogData } from "./module/blogData.mjs";
import { night } from "./components/BgEffect.mjs";
import { updownBtns } from "./components/UpdownBtn.mjs";
import { header } from "./components/Header.mjs";
import { skills } from "./components/Skills.mjs";
import { works } from "./components/Works.mjs";
import { contacts } from "./components/Contacts.mjs";

class Main{
   mainMakeDom(){
      updownBtns.makeDom();
      header.makeDom();
      skills.makeDom();
      works.makeDom();
      contacts.makeDom();
   }

   mainSmoothBehevior(){
      updownBtns.smoothBehavior();
      header.smoothBehavior();
   }

   on(){
      console.log(blogData);
      this.mainMakeDom();
      this.mainSmoothBehevior();
      
      night.init();

      document.querySelector("#hiMain").style["margin-top"] = `${document.querySelector("#hiHeader").clientHeight}px`;
      
      header.scrolls();
      header.wheels();
      header.resizes();

      
      skills.changeRadius();
      skills.iconRotate();
      skills.clickIcons();

      works.resizes();
      works.clicks();
   }
}

const main = new Main( "main" );
main.on();