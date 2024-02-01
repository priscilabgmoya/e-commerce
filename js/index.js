import { mueblesOficina } from '../db/db.js';
import { deleteChildNode } from '../helpers/helps.js';
import { Footer } from './footer.js';
import { NavBar } from './navBar.js';
import { cargarBotones, createBotonesCategoria, createMueble, createCategoria } from '../helpers/helpsIndex.js';
const containerCards = document.getElementById("containerCards"),
  containerCategoria = document.getElementById("containerCategories"),
  btnClearCategorie = document.getElementById("btnClearCategories"),
  elementosPorPagina = 4;
let paginaActual = 1, categories = [], bool = false, contador = 0, catgeorySelect = "";

function cargarBotonesCategoria() {
  const btnsCategoria = document.querySelectorAll(".btnCategories");
  btnsCategoria.forEach(btn => {
    btn.onclick = function () {
      deleteChildNode(containerCards);
      btnsCategoria.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove("changeColorBtnCategories");
        }
      })
      btnClearCategorie.classList.remove("btnHidden");
      mueblesOficina.map(mueble => {
        if (mueble.categoria == "" + btn.id) {
          catgeorySelect = "" + btn.id;
          btn.classList.add("changeColorBtnCategories");
          createMueble(containerCards, mueble);
          btnClearCategorie.classList.add("btnClear");
          bool = true;
          contador++;
          generarBotones(); 
        }
      });
    }
  })
}
btnClearCategorie.addEventListener("click", () => {
  window.location.reload();
})
function mostrarMuebles(pagina) {
  deleteChildNode(containerCards);
  if (bool) {
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const mueblesPagina = mueblesOficina.slice(inicio, fin);

    mueblesPagina.forEach(mueble => {
      if(mueble.categoria == catgeorySelect){
        createMueble(containerCards, mueble);
      }
    });
  } else {
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    const mueblesPagina = mueblesOficina.slice(inicio, fin);

    mueblesPagina.forEach(mueble => {
      createMueble(containerCards, mueble);
    });
  }
}

function generarBotones() {
  const paginationContainer = document.getElementById('ContainerPagination');
  paginationContainer.innerHTML = '';
  if (bool) {
    const totalPaginas = Math.ceil(contador / elementosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = 'pagination-btn';
      btn.addEventListener('click', function () {
        paginaActual = i;
        mostrarMuebles(paginaActual);
        resaltarBoton(i);
      });
      paginationContainer.appendChild(btn);
    }

    resaltarBoton(paginaActual);
  } else {
    const totalPaginas = Math.ceil(mueblesOficina.length / elementosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = 'pagination-btn';
      btn.addEventListener('click', function () {
        paginaActual = i;
        mostrarMuebles(paginaActual);
        resaltarBoton(i);
      });
      paginationContainer.appendChild(btn);
    }

    resaltarBoton(paginaActual);
  }

}

function resaltarBoton(pagina) {
  const botones = document.querySelectorAll('.pagination-btn');
  botones.forEach(btn => {
    btn.classList.remove('active');
    if (Number(btn.textContent) === pagina) {
      btn.classList.add('active');
    }
  });
}

window.onload = function () {
  NavBar();
  createCategoria(categories, mueblesOficina);
  mostrarMuebles(paginaActual);
  Footer();
  cargarBotones();
  createBotonesCategoria(categories, containerCategoria);
  cargarBotonesCategoria();
  generarBotones();
}
