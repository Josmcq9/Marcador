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
function toggleFullScreen() {
      const elem = document.documentElement;

      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        // Entrar en modo de pantalla completa
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } else {
        // Salir del modo de pantalla completa
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }