# frozen_string_literal: true

json.array! @pictures, partial: 'pictures/picture', as: :picture
