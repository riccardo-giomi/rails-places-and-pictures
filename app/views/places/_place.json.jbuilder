# frozen_string_literal: true

json.extract! place, :id, :name, :notes, :snapshot, :latitude, :longitude, :pictures, :created_at, :updated_at
json.url place_url(place, format: :json)
json.snapshot url_for(place.snapshot)
json.pictures do
  json.array!(place.pictures) do |picture|
    json.id picture.id
    json.url url_for(picture)
  end
end
