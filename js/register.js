import { Footer } from "./footer.js";
import { NavBar } from "./navBar.js";

const containerFormRegister = document.getElementById("containerFormRegister");

function formRegister() {
  const form = document.createElement("form");
  form.classList.add("border", "border-2", "rounded-2", "m-4", "p-3", "w-50");
  form.innerHTML = `   
  <div class="d-flex justify-content-evenly">
  <div class="w-100 mx-1">
    <label for="name" class="form-label">Nombre</label>
    <input
      type="text"
      class="form-control"
      id="name"
      placeholder="Ingrese su nombre"
      aria-describedby="Nombre"
      required
    />
  </div>
  <div class="w-100 mx-1">
    <label for="lastName" class="form-label">Apellido</label>
    <input
      type="text"
      class="form-control"
      id="lastName"
      placeholder="Ingrese su apellido"
      aria-describedby="Nombre"
      required
    />
  </div>
</div>
<div class="d-flex">
  <div class="mx-1 mt-3">
    <label for="years" class="form-label">Edad</label>
    <input
      type="text"
      class="form-control"
      id="years"
      aria-describedby="Nombre"
      required
    />
  </div>
  <div class="mx-4 mt-3">
    <label for="dni" class="form-label">DNI</label>
    <input
      type="text"
      class="form-control input-personalizado"
      id="dni"
      placeholder="Ingrese su DNI"
      aria-describedby="Nombre"
      required
    />
  </div>
</div>

<hr />
<div>
  <label for="exampleInputEmail" class="form-label"
    >Dirección de email</label
  >
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail"
    aria-describedby="emailHelp"
    placeholder="Ingrese su email"
    required
  />
  <label for="exampleInputEmail1" class="form-label"
    >Repita su email</label
  >
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Repita su email"
    required
  />
</div>
<div id="emailHelp" class="form-text">
  No compartiremos tu email con nadie mas.
</div>

<div class="my-2">
  <label for="exampleInputPassword" class="form-label"
    >Contraseña</label
  >
  <input
    type="password"
    class="form-control"
    id="exampleInputPassword"
    placeholder="Ingrese su contraseña"
    required
  />
  <label for="exampleInputPassword1" class="form-label"
    >Repita su contraseña</label
  >
  <input
    type="password"
    class="form-control"
    id="exampleInputPassword1"
    placeholder="Repita su contraseña"
    required
  />
</div>
<hr />

<div class="modal-footer d-flex justify-content-between">
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="exampleCheck1"
    />

    <label class="form-check-label mb-3" for="exampleCheck1"
      >Quieres recibir novedades?</label
    >
  </div>

  <div>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-dismiss="modal"
    >
      Cerrar
    </button>
    <button type="submit" class="btn btn-primary">
      Registrarse
    </button>
  </div>
</div>

`;
  containerFormRegister.appendChild(form);
}

window.onload = function () {
  NavBar();
  formRegister();
  Footer();
};
