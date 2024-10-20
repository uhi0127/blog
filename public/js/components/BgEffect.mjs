class Night{
   constructor( id ){
      this.id = id;
   }
      
   init(){
      let style = ["style1", "style2", "style3", "style4"];
      let tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
      let opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
      let estrela = "";
      let constelacao = document.querySelector(".constelacao");
      let numeroAleatorio = 5000;
      
      // ** min ~ max 사이의 숫자를 return
      const getRandomArbitrary = (min, max) =>{
         return Math.floor( Math.random() * (max - min) ) + min;
      }
      
      // ** meteor 
      const carregarMeteoro = () =>{
         // ** 처음 실행은 5초 후 실행 
         setTimeout(carregarMeteoro, numeroAleatorio);
         // ** 5~10초 사이에 실행
         numeroAleatorio = getRandomArbitrary(5000, 10000);
         document.querySelector('.chuvaMeteoro').innerHTML = `<div class="meteoro ${style[getRandomArbitrary(0, 4)]}"></div>`;
         setTimeout(()=>{
            document.querySelector('.chuvaMeteoro').innerHTML = "";
         }, 1000);
      }

      for (let i = 0; i < 30; i++) {
         estrela += `
            <span class="
               estrela 
               ${style[getRandomArbitrary(0, 4)]} 
               ${opacity[getRandomArbitrary(0, 6)]} 
               ${tam[getRandomArbitrary(0, 5)]}
            " style= "
               animation-delay: .${getRandomArbitrary(0, 9)}s; 
               left: ${getRandomArbitrary(0, window.innerWidth)}px; 
               top: ${getRandomArbitrary(0, window.innerHeight)}px;
            "></span>`;
      }
   
      constelacao.innerHTML = estrela;
      setTimeout( carregarMeteoro, numeroAleatorio);
   }
}

const night = new Night('night');

export {night};