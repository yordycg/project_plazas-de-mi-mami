"use strict";

import ToastrNotification from "./toastr.js";
import formValidation from "./validationsForm.js";
import { initProducts } from "./products.js";
import modalActions from "./modal.js";

// Variables globales ------------------------------------------------------------------------------
const validUsers = [
  {
    username: "admin",
    password: "Admin1234",
  },
  {
    username: "empleado1",
    password: "Test1234",
  },
];

// MODALES -----------------------------------------------------------------------------------------
modalActions("#modal-login");
modalActions("#modal--update--product");

// VALIDAR UN USUARIO EN LOGIN ---------------------------------------------------------------------
/*
  - TODO: hacer 2 usuarios un "admin" y "empleado"
  - TODO: "empleado" no puede tener acceso a la vista "empleados", quitar del  SIDEBAR
  - TODO: que el boton "reset" del formulario, quite los estilos de validación
*/
formValidation("#login-form");
formValidation("#login-form-modal");

// EYE TOGGLE PASSWORD -----------------------------------------------------------------------------
const passwordContainers = document.querySelectorAll(".password--container");

passwordContainers.forEach((container) => {
  const togglePassword = document.querySelector(".password--toggle");
  const eyeIcon = document.getElementById("eye-icon");
  const eyeSlashIcon = document.getElementById("eye-slash-icon");
  const inputPassword = document.querySelector('.password--container input[type="password"]');

  togglePassword?.addEventListener("click", () => {
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      eyeIcon.classList.add("none");
      eyeSlashIcon.classList.remove("none");
    } else {
      inputPassword.type = "password";
      eyeIcon.classList.remove("none");
      eyeSlashIcon.classList.add("none");
    }
  });
});

// INICIALIZAR TABLA DE PRODUCTOS ------------------------------------------------------------------
const pathProducts = "../db/productos_chilenos.json";
if (document.querySelector(".table--section")) {
  // Hacer accesible globalmente para el botón de reintentar
  window.initProducts = initProducts;
  initProducts.renderProductTable(pathProducts);
}

// INICIALIZAR TABLA DE EMPLEADOS ------------------------------------------------------------------

// INICIALIZAR TABLA DE PROVEEDORES ----------------------------------------------------------------
