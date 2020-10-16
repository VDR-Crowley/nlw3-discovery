// create map
const map = L.map('mapid').setView([-23.5551084,-46.3928731], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
  // recebe latitude
  const lat = event.latlng.lat;
  // recebe longitude
  const lng = event.latlng.lng;
})
