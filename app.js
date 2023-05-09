function cargarContenido() {
  // Cargar contenido adicional utilizando AJAX y jQuery, por ejemplo:
  $.ajax({
    url: "tecnologias.html",
    cache: false,
    success: function(html){
      $("#contenido").append(html);
    }
  });
}

var observer = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting === true) {
    // El elemento ancla es visible, cargar contenido adicional
    cargarContenido();
  }
}, { threshold: [0] });

observer.observe(document.getElementById("sentinel"));

