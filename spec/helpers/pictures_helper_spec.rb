RSpec.describe PicturesHelper do
  describe '#pictures_count' do
    it 'prints "no pictures" if passed something that cannot be counted' do
      pictures = nil
      expect(pictures_count(pictures)).to eq('no pictures')
    end

    specify do
      pictures = build_list(:picture, 0)
      expect(pictures_count(pictures)).to eq('no pictures')
    end

    specify do
      pictures = build_list(:picture, 1)
      expect(pictures_count(pictures)).to eq('one picture')
    end

    specify do
      pictures = build_list(:picture, 100)
      expect(pictures_count(pictures)).to eq('one hundred pictures')
    end
  end
end
