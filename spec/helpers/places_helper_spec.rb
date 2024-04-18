# frozen_string_literal: true

# View helpers for Place model.
RSpec.describe PlacesHelper do
  describe '#places_count' do
    it 'prints "no places" if passed something that cannot be counted' do
      places = nil
      expect(places_count(places)).to eq('no places')
    end

    specify do
      places = build_list(:place, 0)
      expect(places_count(places)).to eq('no places')
    end

    specify do
      places = build_list(:place, 1)
      expect(places_count(places)).to eq('one place')
    end

    specify do
      places = build_list(:place, 100)
      expect(places_count(places)).to eq('one hundred places')
    end
  end

  describe '#place_pictures_count' do
    it 'prints "no pictures were taken here" if passed something that cannot be counted' do
      pictures = nil
      expect(place_pictures_count(pictures)).to eq('no pictures were taken here')
    end

    specify do
      pictures = build_list(:place, 0)
      expect(place_pictures_count(pictures)).to eq('no pictures were taken here')
    end

    specify do
      pictures = build_list(:place, 1)
      expect(place_pictures_count(pictures)).to eq('one picture was taken here')
    end

    specify do
      pictures = build_list(:place, 100)
      expect(place_pictures_count(pictures)).to eq('one hundred pictures were taken here')
    end
  end
end
