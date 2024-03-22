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

  describe 'attachments' do
    describe '#snapshot' do
      let(:variants) { described_class.reflect_on_attachment(:snapshot).named_variants.keys }

      # Note that it still responds to #attachments with a single-value array
      it 'is a single-file attachment' do
        expect(place.snapshot).to respond_to(:attachment)
      end

      it 'has a "gallery" variant' do
        expect(variants).to include(:gallery)
      end

      it 'has a "thumb" variant' do
        expect(variants).to include(:thumb)
      end

      # Additional spec for images that are validated as required.
      # it 'is required' do
      #   expect(place).to validate_attached_of(:snapshot)
      # end

      it 'must be a valid image file' do
        expect(place).to validate_content_type_of(:snapshot).allowing(:jpg, :jpeg, :png)
      end

      # Additional spec for images that have a size validation (1MB in this example).
      # it 'must be of the right size (<= 1MB)' do
      #   expect(place).to validate_size_of(:snapshot).less_than_or_equal_to(1.megabyte)
      # end
    end

    describe '#pictures' do
      let(:variants) { described_class.reflect_on_attachment(:pictures).named_variants.keys }

      # The double expectations is there because single attachments also respond
      # to #attachments
      it 'is a multi-file attachment' do
        expect(place.pictures)
          .to respond_to(:attachments)
          .and not_to_respond_to(:attachment)
      end

      it 'has a "gallery" variant' do
        expect(variants).to include(:gallery)
      end

      it 'has a "thumb" variant' do
        expect(variants).to include(:thumb)
      end

      # Additional spec for images that are validated as required.
      # it 'is required' do
      #   expect(place).to validate_attached_of(:pictures)
      # end

      it 'must be a valid image file' do
        expect(place).to validate_content_type_of(:pictures).allowing(:jpg, :jpeg, :png)
      end

      # Additional spec for images that have a size validation (1MB in this example).
      # it 'must be of the right size (<= 1MB)' do
      #   expect(place).to validate_size_of(:pictures).less_than_or_equal_to(1.megabyte)
      # end
    end
  end
end
