import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = [ "map" ]
  static values = { marker: Object }

  connect() {
    this.initializeMap()
  }

  initializeMap() {
    const position = [51.505, -0.09]

    this.map    = L.map(this.mapTarget, { attributionControl: false }).setView(position, 13)
    this.marker = this.marker(position).addTo(this.map)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ' Map from &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map)

    L.control.attribution({ prefix: false })
      .setPrefix('Realized using <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>')
      .addTo(this.map)
  }

  marker(position) {
    const icon = L.icon({
      iconUrl: this.markerValue.url,
      shadowUrl: this.markerValue.shadow
    })

    return L.marker(position, { icon })
  }
}
