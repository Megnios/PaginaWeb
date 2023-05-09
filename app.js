// Hacer una solicitud a la API de GitHub para obtener la lista de archivos
$.getJSON('https://api.github.com/repos/Megnios/PaginaWeb/contents/<ruta-a-la-carpeta>', function(data) {

  // Recorrer la lista de archivos
  $.each(data, function(index, file) {

    // Verificar si el archivo es un archivo HTML
    if (file.name.endsWith('.html')) {

      // Crear un nuevo elemento <div> para el archivo y agregarlo a la página
      var newDiv = $('<div>').appendTo('body');

      // Cargar el contenido del archivo HTML en el nuevo elemento <div>
      newDiv.load(file.download_url);
    }
  });
});
