# frozen_string_literal: true

RSpec.describe 'pictures/new' do
  before { assign(:picture, Picture.new) }

  it 'renders new picture form' do
    render

    assert_select 'form[action=?][method=?][enctype=?]', pictures_path, 'post', 'multipart/form-data' do
      assert_select 'input[name=?]', 'picture[description]'
      assert_select 'textarea[name=?]', 'picture[notes]'
      assert_select 'input[name=?][type=?]', 'picture[file]', 'file'
      assert_select 'select[name=?]', 'picture[place_id]'
    end
  end
end
