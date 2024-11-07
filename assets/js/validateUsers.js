import ToastrNotification from './toastr.js';

const validUsers = [
  {
    username: 'admin',
    password: 'Admin1234',
  },
  {
    username: 'empleado1',
    password: 'Test1234',
  },
];

export default function validateUsers() {
  const formLogin = document.querySelector('#login-form');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameLogin = document.querySelector('#username-login').value;
    const passwordLogin = document.querySelector('#password-login').value;
    // console.log(usernameLogin, passwordLogin);
    let isUserValid = false;

    // recorrer array de usuarios y passwords validados
    validUsers.forEach((user) => {
      if (user.username === usernameLogin && user.password === passwordLogin) {
        isUserValid = true;
        ToastrNotification.success('Ingreso exitoso!');

        setTimeout(() => {
          window.location.href = './assets/public/productos.html';
        }, 1000);

        return;
      }
    });

    // enviar las notificaciones
    if (!isUserValid) {
      ToastrNotification.error('Usuario o contraseña incorrectos');
      console.error('Usuario o contraseña incorrectos');
      console.error(`username: ${usernameLogin} password: ${passwordLogin}`);
    }
  });
}
