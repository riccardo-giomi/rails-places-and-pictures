import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = [ "map" ]
  static values = { marker: Object }

  connect() {
    this.latitude = 51.505
    this.longitude = -0.09

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
    const map = L.map(this.mapTarget, { attributionControl: false }).setView([this.latitude, this.longitude], 13)
    map.on('click', this.onMapClick, this)

    return map
  }

  marker() {
    const icon = L.icon({
      iconUrl: this.markerValue.url,
      shadowUrl: this.markerValue.shadow
    })

    return L.marker([this.latitude, this.longitude], { icon }).addTo(this.map)
  }

  onMapClick(e) {
    this.latitude  = e.latlng.lat
    this.longitude = e.latlng.lng

    this.marker.setLatLng([this.latitude, this.longitude])
  }
}
