function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maik Brito sorrindo com oculos de sol e jaqueta cinza"
    )
  } else {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Maik Brito sorrindo com jaqueta cinza")
  }
}
