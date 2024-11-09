'use strict';

import formValidation from './validationsForm.js';
import { initProducts } from './products.js';
import modalActions from './modal.js';
import validateUsers from './validateUsers.js';
import toggleSidebar from './sidebar.js';

/// VALIDAR UN USUARIO EN LOGIN --------------------------------------------------------------------
validateUsers();

// MODALES -----------------------------------------------------------------------------------------
modalActions('#modal-login');
modalActions('#modal--update--product');

// VALIDAR UN USUARIO EN LOGIN ---------------------------------------------------------------------
/*
  - TODO: hacer 2 usuarios un "admin" y "empleado"
  - TODO: "empleado" no puede tener acceso a la vista "empleados", quitar del  SIDEBAR
  - TODO: que el botón "reset" del formulario, quite los estilos de validación
*/
formValidation('#login-form');
formValidation('#login-form-modal');

// TOGGLE SIDEBAR ---------------------------------------------------------------------------------
toggleSidebar();

// EYE TOGGLE PASSWORD -----------------------------------------------------------------------------
const passwordContainers = document.querySelectorAll('.password--container');

passwordContainers.forEach((container) => {
  const togglePassword = document.querySelector('.password--toggle');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeSlashIcon = document.getElementById('eye-slash-icon');
  const inputPassword = document.querySelector('.password--container input[type="password"]');

  togglePassword?.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      eyeIcon.classList.add('none');
      eyeSlashIcon.classList.remove('none');
    } else {
      inputPassword.type = 'password';
      eyeIcon.classList.remove('none');
      eyeSlashIcon.classList.add('none');
    }
  });
});

// INICIALIZAR TABLA DE PRODUCTOS ------------------------------------------------------------------
const pathProducts = '../db/productos_chilenos.json';
if (document.querySelector('.table--section')) {
  // Hacer accesible globalmente para el botón de intentar nuevamente
  window.initProducts = initProducts;
  initProducts.renderProductTable(pathProducts);
}

// INICIALIZAR TABLA DE EMPLEADOS ------------------------------------------------------------------

// INICIALIZAR TABLA DE PROVEEDORES ----------------------------------------------------------------
