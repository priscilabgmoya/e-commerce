const containerCard1 = document.getElementById("containerCard1");

function cardOne() {
  const div = document.createElement("div");
  div.classList.add("card", "cardOne");
  div.innerHTML = `
    <div class="card-body ">
    <h5 class="card-title">Card ejemplo1</h5>
    <hr class="m-1"/>
    <p class="card-text">Descripción breve del producto</p>
    </div>
    <img src="/assets/img/mueble-salon-comedor-moderno-cambrian-chocolate.jpg" class="w-100 imgCard" alt="...">
    `;
  containerCard1.appendChild(div);
}

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

window.onload = function () {
  cardOne();
};
