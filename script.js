function cambiarImagen() {
  //Obtenemos el id de la imagen
  const img = document.getElementById("imagen1");

  // Obtiene solo el nombre del archivo de la URL
  const imgActual = img.src.split("/").pop();

  //Condicionales para cambiar la imágen
  if (imgActual === "download.jpeg") {
    img.src = "poster.jpeg"; // Cambia a poster
  } else if (imgActual === "poster.jpeg") {
    img.src = "wte.jpeg"; // Cambia a wte
  } else {
    img.src = "download.jpeg"; // Cambia a download
  }
}
