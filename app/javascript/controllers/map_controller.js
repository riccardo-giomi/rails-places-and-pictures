import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = [ "map", "latitude", "longitude" ]
  static values = { marker: Object }

  connect() {
    this.updatePosition(this.initialPosition())
    this.initializeMap()
  }

  initializeMap() {
    this.map    = this.map()
    this.marker = this.marker()

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ' Map from &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)

    L.control.attribution({ prefix: false })
      .setPrefix('Realized using <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>')
      .addTo(this.map)
  }

  map() {
    return L.map(this.mapTarget, { attributionControl: false })
            .setView(this.position, 13)
            .on('click', this.onMapClick, this)
  }

  marker() {
    const icon = L.icon({
      iconUrl: this.markerValue.url,
      shadowUrl: this.markerValue.shadow
    })

    return L.marker(this.position, {
      icon,
      keyboard: true,
      autoPanOnFocus: true,
      draggable: true
    })
    .on('move', this.updatePosition, this)
    .addTo(this.map)
  }

  onMapClick(e) {
    this.marker.setLatLng(e.latlng)
  }

  initialPosition() {
    const latitude = this.latitudeTarget.value || 51.505
    const longitude = this.longitudeTarget.value || -0.09

    return { latlng: L.latLng(latitude, longitude) }
  }

  updatePosition({ latlng }) {
    this.position = latlng

    this.latitudeTarget.value  = latlng.lat
    this.longitudeTarget.value = latlng.lng
  }
}
