# frozen_string_literal: true

RSpec.describe 'pictures/index' do
  let(:pictures) { create_list(:complete_picture, 2) }

  before { assign(:pictures, pictures) }

  it 'renders a list of pictures' do
    render

    pictures.each do |picture|
      assert_select "#pictures div##{dom_id picture}" do
        assert_select 'div', html: Regexp.new('href=".*pictures\/\d+".*>Description Value')
        assert_select 'div', text: Regexp.new('Notes Value')
        assert_select 'div img[alt=?]', 'picture_file.jpg'
        assert_select 'div', text: Regexp.new('')
      end
    end
  end
end
