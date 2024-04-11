# frozen_string_literal: true

# Model class from generator.
class Picture < ApplicationRecord
  validates :description, presence: true

  belongs_to :place

  # Starting variants, this should be a sensible default since we know that it
  # is an image:
  has_one_attached :file do |file|
    file.variant :gallery, resize_to_limit: [300, 300]
    file.variant :thumb, resize_to_limit: [100, 100]
  end

  # Starting validation for images, it should be a sensible default.
  validates :file, content_type: %i[jpg jpeg png]
  # Example with additional validations (presence and size)
  # validates :file, attached: true, content_type: %i[jpg jpeg png], size: { less_than_or_equal_to: 1.megabyte }

  # Returns nil if file is not attached or if its file is not
  # persisted yet, or the attachment otherwise.
  #
  # Useful when changing a record to identify pre-existing files that have a
  # signed_id from those that don't (and might need to be handled differently
  # if the change does not go through).
  def persisted_file
    file if file.attached? && file.valid? && file.blob.persisted?
  end
end
