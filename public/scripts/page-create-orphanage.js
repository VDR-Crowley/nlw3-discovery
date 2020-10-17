// create map
const map = L.map('mapid').setView([-23.5551084,-46.3928731], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', event => {
  // recebe latitude
  const lat = event.latlng.lat;
  // recebe longitude
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})


// adicionar o campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images.
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

  // verifica se o campo esta vazio, se sim, se não adicionar ao container de images
  const input = newFieldContainer.children[0]
  if(input.value == '') {
    return 
  }
  // limpar o campo antes de adicionar ao container de images
  input.value = ''
  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget
  const limpa = ''
  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length <= 1) {
    // limpar o campo
    span.parentNode.children[0].value = ''
    return
  }

  // deletar o campo
  span.parentNode.remove()
  
}

// select yeas or no

function toggleSelect(event) {
  // retirar a class .active dos botões
  document.querySelectorAll('.button-select button')
  .forEach( button => button.classList.remove('active') )

  // colocar a class no botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

  // pega o valor de data-value
  input.value = button.dataset.value
}