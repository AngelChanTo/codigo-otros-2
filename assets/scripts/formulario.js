//definimos y asignamos el valor, seleccionamos lo que esta dentor del div con la clase formulario.
var formulario = document.querySelector(".formulario")
//definimos la funcion que se activara

formulario.onsubmit = function(e) {

  e.preventDefault(); //la accion por default que pertenece al evento no ocurrira 
  

  //definimos las variables que corresponden a nombre, edad, y nacionalidad

  var n = formulario.elements.name;
  var e = formulario.elements.age;
  var na = formulario.nationality;
//especificamos el uso de los valores para edad y nombre con las variables nombre y edad.
  var nombre = n.value
  var edad = e.value
 //aqui definimmos como i en nacionalidad al indice seleccionado
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value //optenemos su valor
 
  //imprimos los valores recolectados de edad, nombre y nacionalidad en la consola
  console.log(nombre, edad)
  console.log(nacionalidad)

  //aqui manejamos la validacion de los datos proporcionados
  //el nombre no puede tener 0 caracteres como su longitud, el campo no puede estar vacio, los agrega a la clase de error
  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //la edad debe ser mayor a 18 años y menor a 120, de lo contrario sera un error, los agrega a la clase error
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }
//en el caso de que se cumplan las condiciones sobre el invitado, usamos la funcion agregarInvitado
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}
//agregamos el boton a un funcion aqui eliminamos

//definimos la funcion de agregarInvitado

function agregarInvitado(nombre, edad, nacionalidad) {
//con estos ifs establecemos que la variables nacionalidad sera asignada argentina, mexicana, venezolana o peruana dependiendo de la seleccion del usuario
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
//dentro de la funcion seleccionamos el div con la clase lista-de-invitados
var lista = document.getElementById("lista-de-invitados")
//creamos un nuevo div y le agregamos la clase de elemento-lista
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
//metemos este  nuevo div dentro del div lista-de-invitados
lista.appendChild(elementoLista);

//definimos una funcion llamadda crear elemento
function crearElemento(descripcion, valor) {

//creamos los elementos span, input y br.
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
//asignamos como contenido del span el parametro descripcion seguido de : y un espacio
spanNombre.textContent = descripcion + ": ";
//asignamos al input el valor del paramtero que recibe
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


//agregamos el boton de borrar
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

var corteLinea = document.createElement("br")
//agregamos al div elemento-lista
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);
//definimos la funcion de eliminar  al clickear
botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}