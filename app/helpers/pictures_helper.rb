# frozen_string_literal: true

# View helper for the Place model
module PicturesHelper
  def pictures_count(pictures)
    return 'no pictures' unless pictures.respond_to?(:count)

    number_string = pictures.count.positive? ? pictures.count.humanize : 'no'
    pictures_string = 'picture'.pluralize(pictures.count)

    "#{number_string} #{pictures_string}"
  end
end
