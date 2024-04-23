# frozen_string_literal: true

RSpec.describe 'places/index' do
  include Pagy::Backend

  before do
    create_list(:complete_place, 2)
    @pagy, @places = pagy(Place.all)

    assign(:places, @places)
  end

  it 'renders a list of places' do
    render

    @places.each do |place| # rubocop:disable RSpec/InstanceVariable
      assert_select "#places div##{dom_id place}" do
        assert_select 'div', html: Regexp.new('href=".*places\/\d+".*>Name Value')
        assert_select 'div', text: Regexp.new('Notes Value')
      end
    end
  end
end
