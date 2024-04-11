# frozen_string_literal: true

RSpec.describe Place do
  let(:place) { build(:complete_place) }

  describe '.attributes' do
    describe 'name' do
      specify('name') { expect(place.name).to eq('Name Value') }

      it 'is required' do
        place.name = nil
        expect(place).not_to be_valid
      end
    end

    specify('notes') { expect(place.notes).to eq('Notes Value') }
    specify('latitude') { expect(place.latitude).to eq(BigDecimal('13.37')) }
    specify('longitude') { expect(place.longitude).to eq(BigDecimal('13.37')) }
  end

  describe '#pictures' do
    it 'is a relation to the related pictures' do
      place = build(:complete_place)
      expect(place.pictures.first).to be_a(Picture)
    end

    it 'is optional' do
      place = build(:place)
      expect(place).to be_valid
    end
  end

  describe '#images' do
    let(:place) { build(:complete_place) }

    it 'returns only pictures that have a file' do
      place.pictures << build(:picture)
      expect(place.images.count).to eq(1)
    end
  end
end
