var divContent = document.querySelector('.content');
var divProj = document.createElement('div');
divProj.setAttribute('class', 'proj');
var h3 = document.createElement('h3');
var h4 =  document.createElement('h4');

var database = firebase.database().ref('/');;


// // var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/projects/').once('value').then(function(snapshot) {
// //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });
database.once('value', function (dados) {
    d = Object.keys(dados.val());
    database.on("child_added", function (e) {
        // quest[cont] = e.val().questao;
        // alt1[cont] = e.val().alt1;
        // alt2[cont] = e.val().alt2;
        // alt3[cont] = e.val().alt3;
        // resp[cont] = e.val().resposta;
        // cont++;
        console.log(e);
    });
    console.log(d);
})