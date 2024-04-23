# frozen_string_literal: true

RSpec.describe 'pictures/index' do
  include Pagy::Backend

  before do
    create_list(:complete_picture, 2)
    @pagy, @pictures = pagy(Picture.all)

    assign(:pictures, @pictures)
  end

  it 'renders a list of pictures' do
    render

    @pictures.each do |picture| # rubocop:disable RSpec/InstanceVariable
      assert_select "#pictures div##{dom_id picture}" do
        assert_select 'div', html: Regexp.new('href=".*pictures\/\d+".*>Description Value')
        assert_select 'div', text: Regexp.new('Notes Value')
        assert_select 'div img[alt=?]', 'picture_file.jpg'
        assert_select 'div', text: Regexp.new('')
      end
    end
  end
end
