"use strict";
// Variables globales ------------------------------------------------------------------------------

// VALIDAR UN USUARIO EN LOGIN ---------------------------------------------------------------------
/*
  - TODO: hacer 2 usuarios un "admin" y "empleado"
  - TODO: "empleado" no puede tener acceso a la vista "empleados", quitar del  SIDEBAR
*/

const formLogin = document.getElementById("login--form");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  // obtener los datos del formulario
  const usernameLogin = document.getElementById("usernameLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;

  // validar los datos con una cuenta de usuario "falsa"
  if (usernameLogin == "admin" && passwordLogin == "1234") {
    window.location.href = "../assets/public/productos.html";
  } else {
    alert("Datos ingresados con corresponden!");
  }
});

// MODAL LOGIN -------------------------------------------------------------------------------------
const modal = document.getElementById("modal--login");
const openModalBtn = document.getElementById("btn--open--modal");
const closeModalBtn = document.getElementById("btn--close--modal");

document.addEventListener("DOMContentLoaded", () => {
  // Abrir el modal
  openModalBtn.addEventListener("click", () => {
    modal.showModal(); // Método nativo para abrir el <dialog>
  });

  // Cerrar el modal
  closeModalBtn.addEventListener("click", () => {
    modal.close(); // Método nativo para cerrar el <dialog>
  });
});
