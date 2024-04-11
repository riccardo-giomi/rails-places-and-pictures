# frozen_string_literal: true

json.extract! picture, :id, :description, :notes, :file, :place_id, :created_at, :updated_at
json.url picture_url(picture, format: :json)
json.file url_for(picture.file)
