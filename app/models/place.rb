# frozen_string_literal: true

# Model class from generator.
class Place < ApplicationRecord
  validates :name, presence: true

  has_many :pictures, dependent: :destroy

  def images
    pictures.select { |p| p.file.attached? }
  end
end
