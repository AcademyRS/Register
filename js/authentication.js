let btnLogin = document.querySelector('#submit');

//Inputs

let email = document.querySelector('#email');
let password = document.querySelector('#password');


btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function (result) {
        console.log(result);
        window.location.href = 'proj.html';
        email.value = '';
        password.value = '';
    }).catch(function (error) {
        console.log(error);
    });
});
