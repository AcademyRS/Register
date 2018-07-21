let btnLogin = document.querySelector('#submit');

//Inputs

let email = document.querySelector('#email');
let password = document.querySelector('#password');


btnLogin.addEventListener('click', function () {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function (result) {
        console.log(result);
//         window.location.replace('https://academyrs.github.io/Register/proj.html');
    }).catch(function (error) {
        console.log(error);
    });
});
