"use strict";
// ! Variables globales
const modal = document.getElementById("modal--login");
const openModalBtn = document.getElementById("btn--open--modal");
const closeModalBtn = document.getElementById("btn--close--modal");
const formLogin = document.getElementById("login--form");

// ! Obtener datos del formulario de login
formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  // obtner los datos del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(`username: ${username}`);
  console.log(`password: ${password}`);

  // validar los datos con una cuenta de usuario "falsa"
  if (username == "admin10" && password == "12345678") {
    window.location.href = "../assets/public/inventario.html";
  } else {
    alert("Datos ingresados con corresponden!");
  }
});

// ! Modal - login
document.addEventListener("DOMContentLoaded", function () {
  // const modal = document.getElementById("modal--login");
  // const openModalBtn = document.getElementById("btn--open--modal");
  // const closeModalBtn = document.getElementById("btn--close--modal");

  // Abrir el modal
  openModalBtn.addEventListener("click", function () {
    modal.showModal(); // Método nativo para abrir el <dialog>
  });

  // Cerrar el modal
  closeModalBtn.addEventListener("click", function () {
    modal.close(); // Método nativo para cerrar el <dialog>
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});
