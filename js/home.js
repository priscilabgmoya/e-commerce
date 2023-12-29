import {mueblesOficina } from '../db/db.js'; 
import { Footer } from './footer.js';
import { NavBar } from './navBar.js';
const containerCards = document.getElementById("containerCards");

window.onload = function(){
  NavBar(); 
    mueblesOficina.map((mueble)=>{
        let precioDescuento = 0;
        if(mueble.publicado){
            if(mueble.descuento){
                precioDescuento = Math.round(mueble.precio - ((mueble.precio * mueble.porcentaje_descuento) / 100))
            }
            const div = document.createElement("div"); 
            div.classList.add("card", "mb-3", "cardHome"); 
            div.innerHTML = `<div class="row g-0">
            <div class="col-md-4 cardImgHome">
              <img src="${mueble.url_imagen}" class="img-fluid rounded-start" alt="imagen de ${mueble.nombre}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${mueble.nombre}</h5>
                <p class="card-text">${mueble.descripcion}</p>
                ${mueble.descuento?`
                <p class="containerTexto">
                <small class="text-body-secondary ">Precio :   <span class="textoPrecio">$  ${mueble.precio} </span></small>
                <span class="textoPrecioNuevo"> $${precioDescuento}</span>
                </p>
                ` : `<small class="text-body-secondary">Precio : $ ${mueble.precio}</small>`}
              </div>
              <div class="cardFooter">
              <button class="btnComprarMueble" id="${mueble.id}">comprar</button>
            </div>
          </div>
            </div>
      
          </div>`;
            containerCards.appendChild(div); 
        }
    })
    Footer(); 
}
