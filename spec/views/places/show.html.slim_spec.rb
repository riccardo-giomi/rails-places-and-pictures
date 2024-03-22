# frozen_string_literal: true

RSpec.describe 'places/show' do
  before { assign :place, create(:complete_place) }

  it 'name is rendered and links to the show view' do
    render
    expect(rendered).to match(%r{href=".*places/\d+".*>Name Value})
  end

  it 'renders attributes' do
    render
    expect(rendered).to match(/Notes Value/) # #notes
    expect(rendered).to match(/place_snapshot.jpg/) # #snapshot
    expect(rendered).to match(/13.37/) # #latitude
    expect(rendered).to match(/13.37/) # #longitude
    expect(rendered).to match(/place_pictures_1.jpg/) # #pictures
  end
end
