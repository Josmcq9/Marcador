let puntuacion1 = 0;
let puntuacion2 = 0;

function anotarGol(equipo) {
  if (equipo === 1) {
    puntuacion1++;
  } else if (equipo === 2) {
    puntuacion2++;
  }

  actualizarMarcador();
}

function actualizarMarcador() {
  document.getElementById("puntuacion1").textContent = puntuacion1;
  document.getElementById("puntuacion2").textContent = puntuacion2;
}
