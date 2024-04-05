# frozen_string_literal: true

# :nodoc:
module MapHelper
  def marker_icon_data
    { url: image_path('marker-icon.png'), shadow: image_path('marker-shadow.png') }.to_json
  end
end
