import { articulos } from "./articulos";

let botonCambiarModo = document.querySelector(".botonCambiarModo");
let contenedor = document.querySelector(".contenedor");

botonCambiarModo.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  if (botonCambiarModo.innerHTML == "Modo oscuro") {
    botonCambiarModo.innerHTML = "Modo claro";
  } else {
    botonCambiarModo.innerHTML = "Modo oscuro";
  }
});

for (let i = 0; i < articulos.length; i++) {
  contenedor.innerHTML += `
  <div class="item">
    ${articulos[i].urlImagen}
    ${articulos[i].titulo}
    ${articulos[i].texto}
  </div>
  `;
}
