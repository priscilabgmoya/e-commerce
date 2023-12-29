import { mueblesOficina } from "../db/db.js";
import { Footer } from "./footer.js";
import { NavBar } from "./navBar.js";

function cargarDetalle() {
    let idMueble = '';
    let query = window.location.search;
    let urlParams = new URLSearchParams(query);
    if (urlParams.get('mueble')) {
        idMueble = urlParams.get('mueble');
        let mueble = mueblesOficina.find(mueble => mueble.id === parseInt(idMueble));
        let precioDescuento =0 ;
        if(mueble.descuento){
            precioDescuento = Math.round(mueble.precio - ((mueble.precio * mueble.porcentaje_descuento) / 100))
        }
        console.log(mueble);
        document.getElementById("containerDetalle").innerHTML = `
      <div class="row">
      <div class="col-lg-4 containerImg">
          <img src="${mueble.url_imagen}" alt="imagen de ${mueble.nombre}">
      </div>
      <div class="col-lg-8">
      <h1 class="text-center">
      ${mueble.nombre}    
      </h1>
      <p>${mueble.descripcion}</p>
      ${mueble.descuento?`
      <p class="containerTexto">
      <span class="text-body-secondary ">Precio :   <span class="textoPrecio">$  ${mueble.precio} </span></span>
      <span class="textoPrecioNuevo"> Precio con Descuento: $${precioDescuento}</span>
      </p>
      ` : `<p class="text-body-secondary">Precio : $ ${mueble.precio}</p>`}
          <div class="row containerBtns"> 
      <div class="col-lg-4"> 
          <button class="btnComprar"> <i class="bi bi-bag"></i> Comprar</button>
      </div>
      <div class="col-lg-4">
          <button class="btnAgregarCarrito"><i class="bi bi-plus-circle"></i> Añadir Carrito</button>
      </div>
  </div>
      </div>
      
  </div>
  
      `;
    }
}

window.onload = function () {
    NavBar();
    cargarDetalle();
    Footer();
}