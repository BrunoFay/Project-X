const loginButton = document.getElementById('login-button');
const login = document.querySelector('#email');
const password = document.querySelector('#password');

function verifyLogin(){
    if (login.value === 'tryber@teste.com' && password.value === '123456') {
        return alert('Olá, Tryber!');
    }
        return alert('Email ou senha inválidos.');
}

loginButton.addEventListener('click', verifyLogin);