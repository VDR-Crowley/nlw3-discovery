const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheel: false,
  zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-23.5551084,-46.3928731], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// create and add marker
L.marker([-23.5551084,-46.3928731], { icon })
.addTo(map)

// image gallery

function selectImage(event) {
  const button = event.currentTarget

  // remover todas as classes .active
  const buttons = document.querySelectorAll('.images button')
  // Para cada botao execute o button
  buttons.forEach( button => {
    // button do escopo da função
    button.classList.remove('active')
  })
  // selecionar a image clicada
  const image = button.children[0]
  const imageContainer = document.querySelector('.orphanage-details > img')

  // atualizar o container de image
  imageContainer.src = image.src
  
  // adicionar a classe .active para este botao
  button.classList.add('active')

}
