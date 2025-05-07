const TOTAL = 639;
const contenedor = document.getElementById('contenedorFiguritas');
const contador = document.getElementById('contador');

let figuritasObtenidas = JSON.parse(localStorage.getItem('figuritasObtenidas')) || [];

function actualizarContador() {
  const faltantes = TOTAL - figuritasObtenidas.length;
  contador.textContent = `Faltan ${faltantes} figuritas`;
}

function guardarFiguritas() {
  localStorage.setItem('figuritasObtenidas', JSON.stringify(figuritasObtenidas));
}

for (let i = 1; i <= TOTAL; i++) {
  const boton = document.createElement('button');
  boton.textContent = i;
  boton.classList.add('figurita');

  if (figuritasObtenidas.includes(i)) {
    boton.classList.add('tachada');
  }

  boton.addEventListener('click', () => {
    if (figuritasObtenidas.includes(i)) {
      figuritasObtenidas = figuritasObtenidas.filter(num => num !== i);
      boton.classList.remove('tachada');
    } else {
      figuritasObtenidas.push(i);
      boton.classList.add('tachada');
    }
    guardarFiguritas();
    actualizarContador();
  });

  contenedor.appendChild(boton);
}

actualizarContador();
