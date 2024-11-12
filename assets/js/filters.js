export default function toggleFilters() {
  const filterBtn = document.querySelector('#btn-filter');
  const searchFormBox = document.querySelector('.search--form--box');

  filterBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    searchFormBox.classList.toggle('active');
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!searchFormBox.contains(e.target) && !filterBtn.contains(e.target)) {
      searchFormBox.classList.remove('active');
    }
  });
}
