import { Controller } from "@hotwired/stimulus"
import L from "leaflet"
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'

export default class extends Controller {
  static targets = [ "map", "latitude", "longitude" ]
  static values = { marker: Object, readonly: Boolean, latitude: Number, longitude: Number }

  connect() {
    this.updatePosition(this.initialPosition())
    this.initializeMap()
  }

  initializeMap() {
    this.map       = this.map()
    this.marker    = this.marker()
    this.searchControl = this.searchControl()
  }

  map() {
    const map = L.map(this.mapTarget, { attributionControl: false })
                 .setView(this.position, 13)

    if(!this.readonlyValue) {
      map.on('click', this.onMapClick, this)
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: ' Map from &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    L.control.attribution({ prefix: false })
      .setPrefix('Realized using <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">Leaflet</a>')
      .addTo(map)

    return map
  }

  marker() {
    const icon = L.icon({
      iconUrl: this.markerValue.url,
      shadowUrl: this.markerValue.shadow
    })

    const marker = L.marker(this.position, {
      icon,
      keyboard: true,
      autoPanOnFocus: true,
      draggable: !this.readonlyValue
    })

    if(!this.readonlyValue) {
      marker.on('move', this.updatePosition, this)
    }

    return marker.addTo(this.map)
  }

  searchControl() {
    const style = this.readonlyValue ? 'button' : 'bar'

    const searchControl = new GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      showMarker: false,
      style
    });

    return this.map.addControl(searchControl);
  }

  onMapClick(e) {
    this.marker.setLatLng(e.latlng)
  }

  initialPosition() {
    let latitude =  51.505
    let longitude = -0.09

    if(this.latitudeValue) {
      latitude = this.latitudeValue
      longitude = this.longitudeValue
    }
    else if(this.hasLatitudeTarget && this.latitudeTarget.value) {
      latitude = this.latitudeTarget.value
      longitude = this.longitudeTarget.value
    }

    return { latlng: L.latLng(latitude, longitude) }
  }

  updatePosition({ latlng }) {
    this.position = latlng

    if(this.hasLatitudeTarget) {
      this.latitudeTarget.value  = latlng.lat
      this.longitudeTarget.value = latlng.lng
    }
  }
}
