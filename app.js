const xhr = new XMLHttpRequest();
const url = "https://api.github.com/repos/Megnios/Megnios.github.io/contents/HTML";
const token = "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";

xhr.open("GET", url, true);
xhr.setRequestHeader("Authorization", "token " + token);

xhr.onload = function() {
  if (xhr.status === 200) {
    //const files = JSON.parse(xhr.responseText);
    // Aquí puedes procesar los archivos HTML y agregarlos dinámicamente a tu sitio web
    console.log("hola");
  } else {
    console.log("mal");
    //console.log("Error al obtener archivos HTML: " + xhr.statusText);
  }
};

xhr.onerror = function() {
  console.log("Error de red al obtener archivos HTML");
};

xhr.send();