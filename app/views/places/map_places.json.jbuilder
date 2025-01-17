# frozen_string_literal: true

json.array!(@places) do |place|
  json.extract! place, :id, :name, :latitude, :longitude
  json.pictures_count pictures_count(place.pictures)
end
