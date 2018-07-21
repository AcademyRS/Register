var divContent = document.querySelector('.content');

// // var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/projects/').once('value').then(function(snapshot) {
// //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });


firebase.database().ref('/projects/').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var obj = childSnapshot.val();
        Create(obj, key);
    })
});


function Create (obj, key) {
    var divProj = document.createElement('div');
    divProj.setAttribute('class', 'proj');
    var h3 = document.createElement('h3');
    var p =  document.createElement('p');
    h3.innerHTML = key;
    p.innerHTML = 'Progresso : ' + obj.progress;
    divProj.appendChild(h3);
    divProj.appendChild(p);
    divContent.appendChild(divProj);
}