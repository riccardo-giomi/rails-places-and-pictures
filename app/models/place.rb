# frozen_string_literal: true

# Model class from generator.
class Place < ApplicationRecord
  validates :name, presence: true

  # Starting variants, this should be a sensible default since we know that it
  # is an image:
  has_one_attached :snapshot do |snapshot|
    snapshot.variant :gallery, resize_to_limit: [300, 300]
    snapshot.variant :thumb, resize_to_limit: [100, 100]
  end

  # Starting validation for images, it should be a sensible default.
  validates :snapshot, content_type: %i[jpg jpeg png]
  # Example with additional validations (presence and size)
  # validates :snapshot, attached: true, content_type: %i[jpg jpeg png], size: { less_than_or_equal_to: 1.megabyte }

  # Starting variants, this should be a sensible default since we know that they
  # are images:
  has_many_attached :pictures do |pictures|
    pictures.variant :gallery, resize_to_limit: [300, 300]
    pictures.variant :thumb, resize_to_limit: [100, 100]
  end

  # Starting validation for a group of images, it should be a sensible default.
  validates :pictures, content_type: %i[jpg jpeg png]
  # Example of additional validations (presence and size)
  # validates :pictures, attached: true, content_type: %i[jpg jpeg png], size: { less_than_or_equal_to: 1.megabyte }

  # Returns nil if snapshot is not attached or if it's file is not
  # persisted yet, or the attachment eitherwise.
  #
  # Useful when changing a record to identify pre-existing files that have a
  # signed_id from those that don't (and might need to be handled differently
  # if the change does not go through).
  def persisted_snapshot
    snapshot if snapshot.attached? && snapshot.valid? && snapshot.blob.persisted?
  end

  # Returns only the file blobs of multi-attachment that are persisted, and
  # valid.
  #
  # Useful when changing a record to identify pre-existing files that have a
  # signed_id from those that don't (and might need to be handled differently
  # if the change does not go through).
  def persisted_pictures
    return [] unless pictures.attached?

    pictures.select { |blob| blob.valid? && blob.persisted? }
  end
end
