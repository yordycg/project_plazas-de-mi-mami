export default function formValidation(formSelector) {
  // obtenemos el formulario que queremos validar
  const formElement = document.querySelector(formSelector);

  // agregar atributo "novalidate" al formulario
  // esto hace que el navegador NO VALIDE el formulario
  // con los atributos de validación HTML5
  // - why? no queremos que la validación se ejecute al mismo tiempo
  formElement?.setAttribute('novalidate', '');

  // array de objetos que contienen las validaciones aplicadas
  // a cada input del formulario
  const validationOptions = [
    {
      attribute: 'required',
      // comprobar si el input tiene algún valor (quitando los espacios vacíos)
      isValid: (input) => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} es obligatorio`,
    },
    {
      attribute: 'pattern',
      // comprobar usando la validación nativa del navegador para el pattern
      isValid: (input) => input.validity.valid,
      errorMessage: (input, label) => `${label.textContent} no es válida(o)`,
    },
    /*
    {
        attribute: "title",
        comprueba que el titulo no este vació
        isValid: input => input.title.trim() !== "",
        errorMessage: (input, label) => `${label.textContent} debe tener un título`
    },
    */
    {
      attribute: 'minlength',
      // comprueba si el input tiene un valor
      // comprueba si el texto tiene al menos los caracteres mínimos
      isValid: (input) => input.value && input.value.length >= input.minLength,
      errorMessage: (input, label) => `Debe tener al menos ${input.minLength} caracteres`,
    },
    // * por defecto, la propiedad maxlength no me deja escribir más caracteres
    {
      attribute: 'maxlength',
      // comprueba si el texto no excede el máximo de caracteres
      isValid: (input) => input.value.length <= input.maxLength,
      errorMessage: (input, label) => `No puede tener más de ${input.maxLength} caracteres`,
    },
    {
      attribute: 'min',
      // comprueba si el numero es mayor o igual al mínimo
      isValid: (input) => input.value >= input.min,
      errorMessage: (input, label) => `Debe ser mayor o igual a ${input.min}`,
    },
    {
      attribute: 'max',
      // comprueba si el numero es menor o igual al máximo
      isValid: (input) => input.value <= input.max,
      errorMessage: (input, label) => `Debe ser menor o igual a ${input.max}`,
    },
    {
      attribute: 'email',
      // validar el email usando la validación nativa del navegador
      isValid: (input) => input.validity.valid,
      errorMessage: (input, label) => `${label.textContent} no es un email válido`,
    },
    {
      attribute: 'number',
      // validar el numero usando la validación nativa del navegador
      isValid: (input) => input.validity.valid,
      errorMessage: (input, label) => `${label.textContent} no es un número válido`,
    },
    /*
    {
        attribute: "url",
        // validar la url usando la validación nativa del navegador
        isValid: input => input.validity.valid,
        errorMessage: (input, label) => `${label.textContent} no es una URL válida`
    },
    {
        attribute: "range",
        // validar el rango usando la validación nativa del navegador
        isValid: input => input.validity.valid,
        errorMessage: (input, label) => `${label.textContent} no está en el rango permitido`
    },
    */
    {
      attribute: 'match',
      /*
      - obtener el valor del "match" que hace referencia al input#password
      - buscamos en el formulario un elemento con ese ID
      - return
          - verificamos que exista el elemento.
          - comparamos si son IGUALES los valores de lo 2 elementos  
      */
      isValid: (input) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = formElement.querySelector(`#${matchSelector}`);

        return matchedElement && matchedElement.value.trim() === input.value.trim();
      },
      /*
      - obtener el valor del "match" que hace referencia al input#password
      - buscamos en el formulario un elemento con ese ID
      - sube 2 niveles para obtener el label del input#password
      - return
        - mensaje de error  
      */
      errorMessage: (input, label) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = formElement.querySelector(`#${matchSelector}`);
        const matchedLabel = matchedElement.parentElement.parentElement.querySelector('label');

        // return `${label.textContent} no coincide con ${matchedLabel.textContent}`;
        return `No coinciden las contraseñas`;
      },
    },
  ];

  // forma para hacer una validación individual a un div.form--group
  // debe validar los criterios aplicados en el HTML5
  const validateSingleFormGroup = (formGroup) => {
    // obtener todas las referencias de los elementos involucrados
    // NO necesitamos hacer un "document.querySelector"
    const labelElement = formGroup.querySelector('label');
    const inputElement = formGroup.querySelector('input, textarea, select');
    const errorMessageElement = formGroup.querySelector('.error--message');
    const errorIconElement = formGroup.querySelector('.error--icon');
    const successIconElement = formGroup.querySelector('.success--icon');

    // verificar si cada input tiene uno de los atributos HTML5
    // recorremos el array de "validationOptions"
    let formGroupError = false;
    for (const option of validationOptions) {
      // * verificar si el input tiene el atributo de validación
      if (inputElement.hasAttribute(option.attribute) && !option.isValid(inputElement)) {
        // mensaje de ERROR
        errorMessageElement.textContent = option.errorMessage(inputElement, labelElement);
        errorMessageElement.classList.remove('hidden'); // MOSTRAR mensaje de error

        // estilos para los ICONOS
        errorIconElement.classList.remove('none'); // MOSTRAR icono de error
        successIconElement.classList.add('none'); // OCULTAR icono de éxito

        // estilos para los BORDES
        inputElement.classList.add('border--error'); // AGREGAR border ROJO
        inputElement.classList.remove('border--success'); // QUITAR border VERDE

        formGroupError = true;
      }
    }

    // * SI NO HAY ERROR
    if (!formGroupError) {
      // mensaje de ÉXITO
      errorMessageElement.textContent = '';
      errorMessageElement.classList.remove('hidden'); // OCULTAR mensaje de error

      // estilos para los ICONOS
      errorIconElement.classList.add('none'); // OCULTAR icono de error
      successIconElement.classList.remove('none'); // MOSTRAR icono de éxito

      // estilos para los BORDES
      inputElement.classList.remove('border--error'); // QUITAR border ROJO
      inputElement.classList.add('border--success'); // AGREGAR border VERDE
    }
  };

  // paramos el comportamiento por defecto del formulario
  // al apretar el botón de submit, evitamos que se recargue la página
  formElement?.addEventListener('submit', (event) => {
    event.preventDefault();

    // al hacer 'click' en el botón de submit
    validateAllFormGroups(formElement);
  });

  // validar todos los grupos del formulario
  const validateAllFormGroups = (formToValidate) => {
    // obtener todos los div.form--group del formulario
    // y almacenarlos en un array
    const formGroups = Array.from(formToValidate.querySelectorAll('.form--group'));

    // una vez que tenemos todos los grupos, iteramos sobre cada uno
    // aplicando la validación individual a cada grupo
    formGroups.forEach((formGroup) => {
      validateSingleFormGroup(formGroup);
    });
  };
}
