import { Controller } from "@hotwired/stimulus"
import L from "leaflet"
import { get } from '@rails/request.js'

export default class extends Controller {
  static targets = [ "map" ]
  static values = { marker: Object, api: String }

  connect() {
    this.initializePosition()
    this.initializeMap()
  }

  initializeMap() {
    this.map = this.map()
    this.loadMarkers()
  }

  map() {
    const map = L.map(this.mapTarget, { attributionControl: false }).setView(this.position, 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ' Map from &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    L.control.attribution({ prefix: false })
      .setPrefix('Realized using <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>')
      .addTo(map)

    return map
  }

  initializePosition() {
    this.position = this.initialPosition().latlng
  }

  initialPosition() {
    let latitude =  51.505
    let longitude = -0.09

    return { latlng: L.latLng(latitude, longitude) }
  }

  async loadMarkers() {
    const response = await get(this.apiValue)
    if (response.ok) {
      const places = await response.json
      const bounds = L.latLngBounds()
      this.markers = []

      for (const i in places) {
        const place = places[i]
        if(place.latitude && place.longitude) {
          const marker = this.addMarker(place)
          this.markers.push(marker)
          bounds.extend(marker.getLatLng())
        }
      }

      if(bounds.isValid()) {
        this.map.fitBounds(bounds.pad(0.05))
      }
    }
  }

  addMarker(place) {
    const icon = L.icon({
      iconUrl: this.markerValue.url,
      shadowUrl: this.markerValue.shadow
    })

    const position = L.latLng(place.latitude, place.longitude)

    const marker = L.marker(position, {
      icon,
      keyboard: true,
      autoPanOnFocus: true
    })

    return marker.addTo(this.map)
  }
}
