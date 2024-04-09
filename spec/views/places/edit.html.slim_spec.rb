# frozen_string_literal: true

RSpec.describe 'places/edit' do
  let(:place) { create(:complete_place) }

  before { assign(:place, place) }

  it 'renders new place form' do
    render

    assert_select 'form[action=?][method=?][enctype=?]', place_path(place), 'post', 'multipart/form-data' do
      assert_select 'input[name=?]', 'place[name]'
      assert_select 'textarea[name=?]', 'place[notes]'

      assert_select 'input[name=?]', 'place[latitude]'
      assert_select 'input[name=?]', 'place[longitude]'

      # Multi-file attachments "pictures"
      # To add new files
      assert_select 'input[name=?][type=?][multiple]', 'place[pictures][]', 'file'
      # To remove files
      assert_select 'input[name=?][type=?]', 'place[pictures][]', 'checkbox'
    end
  end
end
