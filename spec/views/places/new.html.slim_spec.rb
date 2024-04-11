# frozen_string_literal: true

RSpec.describe 'places/new' do
  before { assign(:place, Place.new) }

  it 'renders new place form' do
    render

    assert_select 'form[action=?][method=?]', places_path, 'post' do
      assert_select 'input[name=?]', 'place[name]'
      assert_select 'textarea[name=?]', 'place[notes]'
      assert_select 'input[name=?]', 'place[latitude]'
      assert_select 'input[name=?]', 'place[longitude]'
    end
  end

  it 'has a map section' do
    render

    assert_select 'div[id=?]', 'map'
  end
end
