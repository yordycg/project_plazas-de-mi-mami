// MODAL LOGIN -------------------------------------------------------------------------------------
/*
const modal = document.getElementById('modal-login');
const openModalBtn = document.getElementById('btn-open-modal');
const closeModalBtn = document.getElementById('btn-close-modal');

document.addEventListener('DOMContentLoaded', () => {
  // Abrir el modal
  openModalBtn.addEventListener('click', () => {
    modal.showModal(); // Método nativo para abrir el <dialog>
  });

  // Cerrar el modal
  closeModalBtn.addEventListener('click', () => {
    modal.close(); // Método nativo para cerrar el <dialog>
  });
});
*/

export default function modalActions(modalSelector) {
  const modal = document.querySelector(modalSelector);
  const openModalBtn = document.querySelector(`#btn-open-modal`);
  const closeModalBtn = document.querySelector(`#btn-close-modal`);

  document.addEventListener('DOMContentLoaded', () => {
    // Abrir el modal
    // "?." para evitar errores si no existe el elemento
    openModalBtn?.addEventListener('click', () => {
      modal.showModal();
    });

    // Cerrar el modal
    closeModalBtn?.addEventListener('click', () => {
      modal.close();
    });
  });
}
