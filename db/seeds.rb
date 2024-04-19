# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

coordinates = [
  [39.61, -105.02], # Littleton, Colorado USA
  [39.74, -104.99], # Denver, Colorado USA
  [39.73, -104.8],  # Aurora, Colorado USA
  [39.77, -105.23], # Golden, Colorado USA
  [51.5, -0.09],    # London
  [52.52, 13.39],   # Berlin
  [48.86, 2.361],   # Paris
  [41.89, 12.49],   # Rome
  [40.40, -3.69],   # Madrid
  [43.77, 11.25],   # Florence
  [41.38, 2.18],    # Barcelona
  [28.47, -16.25],  # Santa Cruz de Tenerife
  [48.14, 11.56],   # Munich
  [50.09, 14.42],   # Prague
  [46.96, 7.46],    # Bern
  [53.34, -6.25],   # Dublin
  [59.93, 10.74],   # Oslo
  [59.33, 18.08],   # Stockholm
  [37.97, 23.71],   # Athens
  [38.71, -9.13]    # Lisbon
]
20.times do |i|
  Place.create(name:      "I am a place, and I'm the number #{i}!",
               notes:     "Here lie the notes for place number #{i}, full of blah blah and with a sprinkle of Lorem Ipsum Dolor Sit Amet...",
               latitude:  coordinates[i][0],
               longitude: coordinates[i][1])
end
