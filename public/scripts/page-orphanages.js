// create map
const map = L.map('mapid').setView([-23.5551084,-46.3928731], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {


  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
    // faz os botao ir para a page orphanage
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"/> </a>`)

  // create and add marker
  L.marker([lat, lng], { icon })
  .addTo(map)
  .bindPopup(popup)
}

// pegando os span do orphanages
const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
  
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  
  addMarker(orphanage)
})