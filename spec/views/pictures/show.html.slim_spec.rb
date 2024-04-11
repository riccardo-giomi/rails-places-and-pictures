# frozen_string_literal: true

RSpec.describe 'pictures/show' do
  before { assign :picture, create(:complete_picture) }

  it 'description is rendered and links to the show view' do
    render
    expect(rendered).to match(%r{href=".*pictures/\d+".*>Description Value})
  end

  it 'renders attributes' do
    render
    expect(rendered).to match(/Notes Value/) # #notes
    expect(rendered).to match(/picture_file.jpg/) # #file
    expect(rendered).to match(//) # #place
  end
end
