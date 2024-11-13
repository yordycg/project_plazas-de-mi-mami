// TABLA EMPLEADOS ---------------------------------------------------------------------------------
async function renderEmployeeTable(pathJson) {
  const tableSection = document.querySelector('.table--section--employees');
  if (!tableSection) return;

  // Mostrar loader
  showLoader(tableSection, 'empleados');

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(pathJson);
    if (!response.ok) throw new Error('No se pudo cargar los datos');

    const data = await response.json();

    // Mostrar tabla de empleados
    renderEmployeeTableContent(data, tableSection);
  } catch (error) {
    showErrorMessage(tableSection);
    console.error('Error al cargar los empleados:', error);
  }
}

const createEmployeeRow = (empleado, index) => {
  return `
    <tr>
      <td class="center--col--table">
        <input type="checkbox" name="employee_id" value="${index + 1}" />
      </td>
      <td class="center--col--table">${index + 1}</td>
      <td class="table--main--name"><strong>${empleado.nombres}</strong></td>
      <td>${empleado.apellido_1} ${empleado.apellido_2}</td>
      <td>${empleado.rut}</td>
      <td>${empleado.email}</td>
      <td>${empleado.telefono}</td>
      <td>${empleado.nacionalidad}</td>
      <td>${empleado.tipo_usuario}</td>
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

const renderEmployeeTableContent = (empleados, container) => {
  const tableHTML = `
    <table class="table">
      <thead>
        <tr>
          <th class="center--col--table">-</th>
          <th class="center--col--table">ID</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>RUT</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Nacionalidad</th>
          <th>Tipo Usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${empleados.map((empleado, index) => createEmployeeRow(empleado, index)).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
};

// TABLA PROVEEDORES -------------------------------------------------------------------------------
async function renderProviderTable(pathJson) {
  const tableSection = document.querySelector('.table--section--providers');
  if (!tableSection) return;

  // Mostrar loader
  showLoader(tableSection, 'proveedores');

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(pathJson);
    if (!response.ok) throw new Error('No se pudo cargar los datos');

    const data = await response.json();
    console.log(data);

    // Mostrar tabla de proveedores
    renderProviderTableContent(data, tableSection);
  } catch (error) {
    showErrorMessage(tableSection);
    console.error('Error al cargar los proveedores:', error);
  }
}

const createProviderRow = (proveedor, index) => {
  return `
    <tr>
      <td class="center--col--table">
        <input type="checkbox" name="provider_id" value="${index + 1}" />
      </td>
      <td class="center--col--table">${index + 1}</td>
      <td class="table--main--name"><strong>${proveedor.nombre_empresa}</strong></td>
      <td>${proveedor.rut_empresa}</td>
      <td>${proveedor.direccion_empresa}</td>
      <td>${proveedor.telefono_empresa}</td>
      <td>${proveedor.email_empresa}</td>
      <td>${proveedor.contacto.nombres} ${proveedor.contacto.apellido_1}</td>
      <td>${proveedor.contacto.telefono}</td>
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

const renderProviderTableContent = (proveedores, container) => {
  const tableHTML = `
    <table class="table">
      <thead>
        <tr>
          <th class="center--col--table">-</th>
          <th class="center--col--table">ID</th>
          <th>Empresa</th>
          <th>RUT</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Contacto</th>
          <th>Tel. Contacto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${proveedores.map((proveedor, index) => createProviderRow(proveedor, index)).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHTML;
};

// TABLA PRODUCTOS ---------------------------------------------------------------------------------
async function renderProductTable(pathJson) {
  const tableSection = document.querySelector('.table--section--products');
  if (!tableSection) return;

  // Mostrar loader
  showLoader(tableSection, 'productos');

  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(pathJson);
    if (!response.ok) throw new Error('No se pudo cargar los datos');

    const data = await response.json();

    // Mostrar tabla de productos
    renderProductTableContent(data.productos, tableSection);
  } catch (error) {
    showErrorMessage(tableSection);
    console.error('Error al cargar los productos:', error);
  }
}

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
      <td class="center--col--table">
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

const renderProductTableContent = (productos, container) => {
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

// LOADER ------------------------------------------------------------------------------------------
const showLoader = (container, nameTable) => {
  container.innerHTML = `
    <div class="loader--container">
      <div class="loader"></div>
      <p>Cargando ${nameTable}...</p>
    </div>
  `;
};

const showErrorMessage = (container) => {
  container.innerHTML = `
    <div class="error-message">
      <p>Error al cargar los datos. Por favor, intente nuevamente.</p>
    </div>
  `;
};

export { renderEmployeeTable, renderProviderTable, renderProductTable };
