let trofeo = {
  arrayTrofeos: [],
  arrayFechas: [],

  getTrofeos: function() {
    const trofeos = document.querySelectorAll(".trofeo");
    const fechas = document.querySelectorAll(".hola");

    trofeos.forEach(trofeos => {
      this.arrayTrofeos.push(trofeos);
    });

   

    fechas.forEach(fechas => {
      this.arrayFechas.push(fechas);
    });
  },

  animate: function(trofeo, mouseOut) {
    if (mouseOut == true) {
      anime({
        targets: trofeo,
        translateY: 0,
        delay: 0
      });
    } else {
      anime({
        targets: trofeo,
        translateY: -30
      });
    }
  },

  arrow: function(num, mouseOver) {
  
    let fecha = this.arrayFechas[num];
    fecha.classList.add("fecha-show");

    if (mouseOver == true) {
      
      fecha.classList.remove("fecha-show");
    }
  }
};

function showTrofeos(stagger, targets, x) {
  anime({
    targets: targets,
    translateX: [x, 0],
    delay: anime.stagger(stagger),
    opacity: [0, 1],

    complete: function() {
      mainTrofeos();
    }
  });
}

function mainTrofeos() {
  trofeo.getTrofeos();
  //animaciones trofeos
  trofeo.arrayTrofeos.forEach((arrayTrofeos, num) => {
    //mouse sobre el trofeo
    arrayTrofeos.addEventListener("mouseover", () => {
      trofeo.arrow(num, false);
      trofeo.animate(arrayTrofeos, false);
    });
    //mouse fuera del trofeo
    arrayTrofeos.addEventListener("mouseout", () => {
      trofeo.animate(arrayTrofeos, true);
      trofeo.arrow(num, true);
    });
  });
}

anime({
  targets: ".arrow",
  translateY: -15,
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine"
});

//scroll fullpage.js

new fullpage("#fullPage", {
  //navegacion
  autoScrolling: true,
  controlArrows: true,
  navigation: false,
  scrollingSpeed: 800,

  //diseño
  verticalCentered: false,
 
 

  onLeave: function(origin, destination, direction){
		var leavingSection = this;

		//after leaving section 1
		if(origin.index == 0 && direction =='down'){
			showTrofeos(100, "#trofeo", -50);
    }
    //after leaving section 2
		if(origin.index == 1 && direction =='down'){
        showTrofeos(100, ".trofeo-campeones", -100);
    }
    //after leaving section 3
		if(origin.index == 2 && direction =='down'){
      setTimeout( () => {
        showTrofeos(400, ".trofeo-copa", -50);
      },100)
			
    }
    //after leaving section 4
		if(origin.index == 3 && direction =='down'){
      setTimeout( () => {
        showTrofeos(300, ".trofeo-concacaf",-300);
      }, 100)
			
    }
    //after leaving section 5
		if(origin.index == 4 && direction =='down'){
			setTimeout( () => {
        showTrofeos(300, ".trofeo-challenger",-300);
      }, 100)
    }
    //after leaving section 6
    if(origin.index == 5 && direction =='down'){
        showTrofeos(300, ".trofeo-pentagonales",-50);
    }
    //after leaving section 7
    if(origin.index == 6 && direction =='down'){
      setTimeout( () => {
        showTrofeos(300, ".trofeo-guadalajara",-300);
      }, 100)
  }
   //after leaving section 8
   if(origin.index == 7 && direction =='down'){
    console.log("uri");
}
	}
});