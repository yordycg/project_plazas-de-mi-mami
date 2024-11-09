export default function toggleSidebar() {
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.querySelector('.sidebar--section');
  const footer = document.querySelector('.footer--section');
  const footerSpan = document.querySelector('.footer--section span');
  const searchInput = document.querySelector('.search--input');
  const searchBar = document.querySelector('.search--bar');
  const searchIcon = document.querySelector('.search--icon');

  // Abrir sidebar al hacer click en el input de búsqueda
  searchBar?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate');
      searchInput.placeholder = '';
      footerSpan.style.display = 'block';
    }
  });

  // Abrir sidebar al hacer click en el ícono de búsqueda
  searchIcon?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate');
      searchInput.placeholder = '';
      footerSpan.style.display = 'block';
    }
  });

  // Abrir y cerrar sidebar con el botón
  toggleBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    footer.classList.toggle('close');

    toggleBtn.classList.toggle('rotate');

    // Agregar o quitar el placeholder
    // if (sidebar.classList.contains('close')) searchInput.placeholder = 'Buscar...';
    // else searchInput.placeholder = '     Buscar...';
  });
}
