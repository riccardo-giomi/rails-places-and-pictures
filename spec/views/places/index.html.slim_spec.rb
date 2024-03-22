# frozen_string_literal: true

RSpec.describe 'places/index' do
  let(:places) { create_list(:complete_place, 2) }

  before { assign(:places, places) }

  it 'renders a list of places' do
    render

    places.each do |place|
      assert_select "#places div##{dom_id place}" do
        assert_select 'div', html: Regexp.new('href=".*places\/\d+".*>Name Value')
        assert_select 'div', text: Regexp.new('Notes Value')
        assert_select 'div img[alt=?]', 'place_snapshot.jpg'
        assert_select 'div', text: Regexp.new('13.37')
        assert_select 'div', text: Regexp.new('13.37')
        assert_select 'div img[alt=?]', 'place_pictures_1.jpg'
      end
    end
  end
end
