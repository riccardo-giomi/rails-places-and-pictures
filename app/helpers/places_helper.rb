# frozen_string_literal: true

# View helper for the Place model
module PlacesHelper
  def places_count(places)
    return 'no places' unless places.respond_to?(:count)

    number_string = places.count.positive? ? places.count.humanize : 'no'
    places_string = 'place'.pluralize(places.count)

    "#{number_string} #{places_string}"
  end

  def place_pictures_count(pictures)
    return 'no pictures were taken here' unless pictures.respond_to?(:count)

    number_string   = pictures.count.positive? ? pictures.count.humanize : 'no'
    pictures_string = 'picture'.pluralize(pictures.count)
    verb_string     = pictures.count == 1 ? 'was' : 'were'

    "#{number_string} #{pictures_string} #{verb_string} taken here"
  end
end
