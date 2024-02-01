import { Footer } from "./footer.js";
import { NavBar } from "./navBar.js";

const containerFormContact = document.getElementById("containerFormContact");

function contactForm() {
  const form = document.createElement("form");
  form.classList.add("border", "border-2", "rounded-2", "m-4", "p-3", "w-50");
  form.innerHTML = `            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"
    >Email
  </label>
  <input
    type="email"
    class="form-control"
    id="exampleFormControlInput1"
    placeholder="Ingrese su email"
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"
    >Dejanos aquí tu mensaje:</label
  >
  <textarea
    class="form-control"
    id="exampleFormControlTextarea1"
    rows="3"
  ></textarea>
</div>
<div class="d-flex justify-content-end">
  <button type="button" class="btn btn-success">Enviar</button>
</div>
`;
  containerFormContact.appendChild(form);
}

window.onload = function () {
  NavBar();
  contactForm();
  Footer();
};
