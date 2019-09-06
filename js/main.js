let trofeo = {
  arrayTrofeos: [],
  arrayFlechas: [],
  arrayFechas: [],

  getTrofeos: function() {
    const trofeos = document.querySelectorAll(".trofeo");
    const flechas = document.querySelectorAll(".arrowTrofeo");
    const fechas = document.querySelectorAll(".hola");

    trofeos.forEach(trofeos => {
      this.arrayTrofeos.push(trofeos);
    });

    flechas.forEach(flechas => {
      this.arrayFlechas.push(flechas);
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
    let flecha = this.arrayFlechas[num];
    let fecha = this.arrayFechas[num];

    flecha.classList.add("arrowTrofeoShow");
    fecha.classList.add("fecha-show");

    if (mouseOver == true) {
      flecha.classList.remove("arrowTrofeoShow");
      fecha.classList.remove("fecha-show");
    }
  }
};

anime({
  targets: ".trofeo",
  translateX: [-1000, 0], 
  delay: anime.stagger(100),
  opacity: [0, 1],

  complete: function() {
    mainTrofeos();
  }
});

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
