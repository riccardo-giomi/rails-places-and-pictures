# frozen_string_literal: true

RSpec.describe 'places/new' do
  before { assign(:place, Place.new) }

  it 'renders new place form' do
    render

    assert_select 'form[action=?][method=?][enctype=?]', places_path, 'post', 'multipart/form-data' do
      assert_select 'input[name=?]', 'place[name]'
      assert_select 'textarea[name=?]', 'place[notes]'
      assert_select 'input[name=?][type=?]', 'place[snapshot]', 'file'
      assert_select 'input[name=?]', 'place[latitude]'
      assert_select 'input[name=?]', 'place[longitude]'
      assert_select 'input[name=?][type=?][multiple]', 'place[pictures][]', 'file'
    end
  end
end
