# frozen_string_literal: true

json.extract! place, :id, :name, :notes, :latitude, :longitude, :created_at, :updated_at
json.url place_url(place, format: :json)
json.pictures do
  json.array!(place.pictures) do |picture|
    json.id picture.id
    json.url url_for(picture)
  end
end
