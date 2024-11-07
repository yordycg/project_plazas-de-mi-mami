export const renderProductTable = async (pathJson) => {
  const tableSection = document.querySelector('.table--section');

  // Mostrar loader
  showLoader(tableSection);

  try {
    // Simular delay de 10 segundos
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // const response = await fetch('./assets/db/productos_chilenos.json');
    const response = await fetch(pathJson);
    if (!response.ok) throw new Error('No se pudo cargar los datos');

    const data = await response.json();

    // Renderizar tabla completa
    renderTable(data.productos, tableSection);
  } catch (error) {
    showErrorMessage(tableSection);
    console.error('Error al cargar los productos:', error);
  }
};

const createProductRow = (producto, index) => {
  return `
    <tr>
      <td class="center--col--table">
        <input type="checkbox" name="product_id" value="${index + 1}" />
      </td>
      <td class="center--col--table">${index + 1}</td>
      <td class="table--main--name"><strong>${producto.nombre}</strong></td>
      <td>${producto.categoria}</td>
      <td>${producto.tipoUnidad}</td>
      <td>${producto.marca}</td>
      <td>$ ${producto.precioVenta.toLocaleString('es-CL')}</td>
      <td>$ ${producto.precioCompra.toLocaleString('es-CL')}</td>
      <td>
        <p class="${producto.stock <= producto.stockMinimo ? 'status minimum' : ''}">${
    producto.stock
  }</p>
      </td>
      <td>${producto.stockMinimo}</td>
      <td>
        <button class="btn btn--update btn--icon">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn--delete btn--icon">
          <i class="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  `;
};

const showLoader = (container) => {
  container.innerHTML = `
    <div class="loader--container">
      <div class="loader"></div>
      <p>Cargando productos...</p>
    </div>
  `;
};

const showErrorMessage = (container) => {
  container.innerHTML = `
    // <div class="error-message">
    //   <i class="bi bi-exclamation-triangle-fill"></i>
    //   <p>No se pudo cargar la tabla de productos</p>
    //   <button class="btn btn--primary" onclick="window.initProducts.renderProductTable()">
    //     Intentar Nuevamente
    //   </button>
    // </div>
    <div class="error-message">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <p>No se pudo cargar la tabla de productos</p>
    </div>
  `;
};

const renderTable = (productos, container) => {
  const tableHTML = `
    <table class="table">
      <thead>
        <tr>
          <th class="center--col--table">-</th>
          <th class="center--col--table">ID</th>
          <th>Nombre de producto</th>
          <th>Departamento</th>
          <th>Tipo Venta</th>
          <th>Marca</th>
          <th>Precio Venta</th>
          <th>Costo</th>
          <th>Inventario</th>
          <th>Inv. Mínimo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${productos.map((producto, index) => createProductRow(producto, index)).join('')}
      </tbody>
    </table>
  `;

  // Reemplazar contenido completo
  container.innerHTML = tableHTML;
};

export const initProducts = {
  renderProductTable,
};
