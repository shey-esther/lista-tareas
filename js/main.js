var arrayTareas =[ {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }];




/////////////////////TODO ESTO ES PARA EDITAR////////////////////////////////////////

// en esta function recorre el array a la posicion title
function mostrar(){ 

  var html = "";

  for (var i = 0; i < arrayTareas.length; i++) {

    html += "<div>"+"<li contentEditable>" + arrayTareas[i].title+"</li>" +"</div>";
  }
  document.getElementById("mostrar").innerHTML = html;
}
  mostrar();

// funcion constructora
function tareas(userId,id,title,completed){
  this.userId=userId,
  this.id=id,
  this.title=title,
  this.completed=completed
}

//Agrega una nueva tarea en el html && creando una instancia
function añadir(){

    var agregar = document.getElementById("agregar").value;
    var tareitas = new tareas(1,10,agregar,true); // creando instancia
    arrayTareas.push(tareitas);
    mostrar();
}

//tachar el elemento del array//EDITAAAAAA!!!
var tacharLista = document.getElementsByTagName("li");
for (var i = 0; i < tacharLista.length; i++) {
    tacharLista[i].onclick = function (event){

      eleminarTarea (event); 
    }
}

function eleminarTarea(event){
     console.log (event.target.textContent);
}



///////////////////// al descomentar todo este ejercicio tacha la lista /////////////////////////



// // en esta function recorre el array a la posicion title
// function mostrar(){ 

//   var html = "";

//   for (var i = 0; i < arrayTareas.length; i++) {

//     html += "<div>"+"<li id='"+arrayTareas[i].id+"'>" + arrayTareas[i].title+"</li>" +"</div>";
//   }
//   document.getElementById("mostrar").innerHTML = html;
// }
//   mostrar();

// // funcion constructora
// function tareas(userId,id,title,completed){
//   this.userId=userId,
//   this.id=id,
//   this.title=title,
//   this.completed=completed
// }

// //Agrega una nueva tarea en el html && creando una instancia
// function añadir(){

//     var agregar = document.getElementById("agregar").value;
//     var tareitas = new tareas(1,10,agregar,true); // creando instancia
//     arrayTareas.push(tareitas);
//     mostrar();
// }

//  //tachar el elemento del array
// var listaTachar = document.getElementsByTagName("li");
// for (var i = 0; i < listaTachar.length; i++) {
//     listaTachar[i].onclick = function (event){
//       var li = event.target.id;
//       document.getElementById(li).style.textDecoration= "line-through"; 
//     }
// }
