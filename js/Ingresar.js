const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.getElementById('form');


const credenciales = {
    usuario: 'Karla',
    password: '1234'
}

const user = {
    usuario: 'User',
    password: '1234'
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioTxt = usuario.value;
    const passwordTxt = password.value;

    if (usuarioTxt === credenciales.usuario && passwordTxt === credenciales.password){
        window.location="../NegociosPro/index.html";
    }else if(usuarioTxt === user.usuario && passwordTxt === user.password){
        window.location="../NegociosPro/index.html";
    }

});