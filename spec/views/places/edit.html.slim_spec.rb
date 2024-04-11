# frozen_string_literal: true

RSpec.describe 'places/edit' do
  let(:place) { create(:complete_place) }

  before { assign(:place, place) }

  it 'renders new place form' do
    render

    assert_select 'form[action=?][method=?]', place_path(place), 'post' do
      assert_select 'input[name=?]', 'place[name]'
      assert_select 'textarea[name=?]', 'place[notes]'

      assert_select 'input[name=?]', 'place[latitude]'
      assert_select 'input[name=?]', 'place[longitude]'
    end
  end
end
