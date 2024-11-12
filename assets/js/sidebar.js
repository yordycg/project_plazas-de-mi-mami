export default function toggleSidebar() {
  const toggleBtn = document.getElementById('toggle-btn');
  const sidebar = document.querySelector('.sidebar--section');
  const footer = document.querySelector('.footer--section');
  const footerSpan = document.querySelector('.footer--section span');
  const searchInput = document.querySelector('.search input');
  const searchIcon = document.querySelector('.search--icon');

  // Abrir sidebar al hacer click en el input de búsqueda
  searchInput?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
      searchInput.setAttribute('placeholder', 'Buscar...');
      searchInput.style.paddingLeft = '5.4rem'; // dar padding de 5.4rem
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate'); // quitar rotación del botón
      footerSpan.style.display = 'inline';
    }
  });

  // Abrir sidebar al hacer click en el ícono de búsqueda
  searchIcon?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      // abrir sidebar y footer
      sidebar.classList.remove('close');
      searchInput.setAttribute('placeholder', 'Buscar...');
      searchInput.style.paddingLeft = '5.4rem'; // dar padding de 5.4rem
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate'); // quitar rotación del botón
      footerSpan.style.display = 'inline';
    }
  });

  // Abrir y cerrar sidebar con el botón
  toggleBtn?.addEventListener('click', () => {
    // que hacer cuando el sidebar se abre
    sidebar.classList.toggle('close');
    searchInput.setAttribute('placeholder', 'Buscar...');
    searchInput.style.paddingLeft = '5.4rem'; // dar padding de 5.4rem
    footer.classList.toggle('close');
    footerSpan.style.display = 'inline';
    toggleBtn.classList.toggle('rotate');

    // que hacer cuando el sidebar se cierra
    if (sidebar.classList.contains('close')) {
      footerSpan.style.display = 'none';
      searchInput.removeAttribute('placeholder');
      searchInput.style.paddingLeft = '1.4rem'; // quitar padding de 5.4rem
    }
  });
}
