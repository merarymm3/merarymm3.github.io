 //Obtener los elementos de la clase.close
let links = document.querySelectorAll(".close");

 //Recorrerlos

 links.forEach(function(link) {

   //Agregar un evento click a cad uno de ellos - case sensitive
   link.AddEventListener("click", function(ev) {
     ev.preventDefault();
     let content = document.querySelector('.content');

     // Quitarle las clases de animación que ya tiene
     content.classlist.remove("animate__tada");
     content.classlist.remove("animate__animated");

     //Agregar las clases de animación que ya tiene
     content.classlist.add("animate__fadeOutUp");
     content.classlist.add("animate__animated");

     setTimeout(function() {
       window.history.go(-1);
     }, 600);
     setInterval

     return false;

   });
 });
