# frozen_string_literal: true

RSpec.describe Picture do
  let(:picture) { build(:complete_picture) }

  describe '.attributes' do
    describe 'description' do
      it 'is a short text describing the picture' do
        expect(picture.description).to eq('Description Value')
      end

      it 'is required' do
        picture.description = nil
        expect(picture).not_to be_valid
      end
    end

    describe 'place' do
      it 'is the Place the picture is related to' do
        expect(picture.place).to be_a(Place)
      end

      it 'is required' do
        picture.place = nil
        expect(picture).not_to be_valid
      end
    end

    specify('notes') { expect(picture.notes).to eq('Notes Value') }
  end

  describe 'attachments' do
    describe '#file' do
      let(:variants) { described_class.reflect_on_attachment(:file).named_variants.keys }

      # Note that it still responds to #attachments with a single-value array
      it 'is a single-file attachment' do
        expect(picture.file).to respond_to(:attachment)
      end

      it 'has a "thumb" variant' do
        expect(variants).to include(:thumb)
      end

      # Additional spec for images that are validated as required.
      # it 'is required' do
      #   expect(picture).to validate_attached_of(:file)
      # end

      it 'must be a valid image file' do
        expect(picture).to validate_content_type_of(:file).allowing(:jpg, :jpeg, :png)
      end

      # Additional spec for images that have a size validation (1MB in this example).
      # it 'must be of the right size (<= 1MB)' do
      #   expect(picture).to validate_size_of(:file).less_than_or_equal_to(1.megabyte)
      # end
    end
  end
end
