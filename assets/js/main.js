'use strict';

import formValidation from './validationsForm.js';
import { renderEmployeeTable, renderProviderTable, renderProductTable } from './renderTables.js';
import modalActions from './modal.js';
import validateUsers from './validateUsers.js';
import toggleSidebar from './sidebar.js';
import toggleFilters from './filters.js';

// MODALES -----------------------------------------------------------------------------------------
modalActions('#modal-login');
modalActions('#modal--update--product');

// VALIDAR UN USUARIO EN LOGIN ---------------------------------------------------------------------
/*
  - TODO: hacer 2 usuarios un "admin" y "empleado"
  - TODO: "empleado" no puede tener acceso a la vista "empleados", quitar del  SIDEBAR
  - TODO: que el botón "reset" del formulario, quite los estilos de validación
*/
validateUsers();
formValidation('#login-form');
formValidation('#login-form-modal');

// TOGGLE SIDEBAR ---------------------------------------------------------------------------------
toggleSidebar();

// TOGGLE FILTERS ---------------------------------------------------------------------------------
toggleFilters();

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

// INICIALIZAR TABLAS ------------------------------------------------------------------------------
const pathProducts = '../db/productos_chilenos.json';
const pathEmployees = '../db/empleados.json';
const pathProviders = '../db/proveedores.json';

document.addEventListener('DOMContentLoaded', () => {
  // INICIALIZAR TABLA DE PRODUCTOS -----------------------------------------------------------
  renderProductTable(pathProducts);

  // INICIALIZAR TABLA DE EMPLEADOS ------------------------------------------------------------
  renderEmployeeTable(pathEmployees);

  // INICIALIZAR TABLA DE PROVEEDORES -----------------------------------------------------------
  renderProviderTable(pathProviders);
});
