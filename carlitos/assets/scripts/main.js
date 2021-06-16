let links = document.queryselectorAll(".close");


links.forEach(link){


link.addEventListener("click"), function(ev){
  ev.preventDefault();
  let content= document.queryselector(".content");


  content.classList.remove("animate__lightSpeedInLeft");
  content.classList.remove("animate__animated");


  content.classList.add("animate__fadeOutUp");
  content.classList.add("animate__animated");


  setTimeout(function(){
    window.history.go(-1);
  }, 600);
  setInterval


  return false;

});
});
