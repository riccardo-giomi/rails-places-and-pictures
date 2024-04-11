# frozen_string_literal: true

RSpec.describe 'pictures/edit' do
  let(:picture) { create(:complete_picture) }

  before { assign(:picture, picture) }

  it 'renders new picture form' do
    render

    assert_select 'form[action=?][method=?][enctype=?]', picture_path(picture), 'post', 'multipart/form-data' do
      assert_select 'input[name=?]', 'picture[description]'
      assert_select 'textarea[name=?]', 'picture[notes]'
      # Single file attachment "file"
      # To add or replace the file
      assert_select 'input[name=?][type=?]', 'picture[file]', 'file'
      # To remove the file
      assert_select 'input[name=?][type=?]', 'picture[file]', 'checkbox'

      assert_select 'input[name=?]', 'picture[place_id]'
    end
  end
end
