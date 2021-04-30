const botonAceptarCookies = document.querySelector("#btn-aceptar-cookies");
const avisoCookies = document.querySelector("#aviso-cookies");
const fondoAvisoCookies = document.querySelector("#fondo-aviso-cookies");

dataLayer = [];

if (!localStorage.getItem("cookies-aceptadas")) {
  avisoCookies.classList.add("activo");
  fondoAvisoCookies.classList.add("activo");
} else {
  dataLayer.push({ event: "cookies-aceptadas" });
}

botonAceptarCookies.addEventListener("click", () => {
  avisoCookies.classList.remove("activo");
  fondoAvisoCookies.classList.remove("activo");

  localStorage.setItem("cookies-aceptadas", true);

  dataLayer.push({ event: "cookies-aceptadas" });
});
