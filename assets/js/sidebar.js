// Abrir y cerrar el sidebar/footer
export function toggleSidebar() {
  const toggleBtn = document.getElementById('toggle-btn');
  const toggleMobileBtn = document.querySelector('.toggle--sidebar--btn');
  const sidebar = document.querySelector('.sidebar--section');
  const footer = document.querySelector('.footer--section');
  const footerSpan = document.querySelector('.footer--section span');
  const searchInput = document.querySelector('.search input');
  const searchIcon = document.querySelector('.search--icon');
  const listIcon = document.querySelector('.bi-list');
  const xIcon = document.querySelector('.bi-x-lg');

  function toggleSidebarFooter() {
    // Verificar si estamos en móvil (<=480px)
    const isMobile = window.matchMedia('(max-width: 480px)').matches;

    if (isMobile) {
      sidebar.classList.toggle('show');
      footer.classList.toggle('show');

      // cambiar el icono del botón
      if (sidebar.classList.contains('show')) {
        listIcon.classList.add('none');
        xIcon.classList.remove('none');
      } else {
        listIcon.classList.remove('none');
        xIcon.classList.add('none');
      }
    } else {
      // Código desktop
      sidebar.classList.toggle('close');
      footer.classList.toggle('close');
      toggleBtn.classList.toggle('rotate');

      if (searchInput) {
        if (sidebar.classList.contains('close')) {
          footerSpan.style.display = 'none';
          searchInput.removeAttribute('placeholder');
          searchInput.style.paddingLeft = '1.4rem';
        } else {
          searchInput.setAttribute('placeholder', 'Buscar...');
          searchInput.style.paddingLeft = '5.4rem';
          footerSpan.style.display = 'inline';
        }
      }
    }
  }

  // Event listeners
  toggleBtn?.addEventListener('click', toggleSidebarFooter);
  toggleMobileBtn?.addEventListener('click', toggleSidebarFooter);

  // Mantener los event listeners existentes para búsqueda
  searchInput?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
      searchInput.setAttribute('placeholder', 'Buscar...');
      searchInput.style.paddingLeft = '5.4rem';
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate');
      footerSpan.style.display = 'inline';
    }
  });

  searchIcon?.addEventListener('click', () => {
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
      searchInput.setAttribute('placeholder', 'Buscar...');
      searchInput.style.paddingLeft = '5.4rem';
      footer.classList.remove('close');
      toggleBtn.classList.remove('rotate');
      footerSpan.style.display = 'inline';
    }
  });
}
