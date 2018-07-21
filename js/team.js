var tableUsers = document.querySelector('#users');

firebase.database().ref('/users/').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var obj = childSnapshot.val();
        Create(obj);
        console.log(obj)
        console.log(obj.name)
    })
});


function Create (obj) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = obj.name;
    tr.appendChild(td)
    var td = document.createElement('td');
    td.innerHTML = obj.int;
    tr.appendChild(td)
    var td = document.createElement('td');
    td.innerHTML = obj.proj;
    tr.appendChild(td)
    tableUsers.appendChild(tr);
}