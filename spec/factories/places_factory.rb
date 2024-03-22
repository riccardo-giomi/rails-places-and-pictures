# frozen_string_literal: true

FactoryBot.define do
  factory :place do
    name { 'Name Value' }
    notes { 'Notes Value' }
    latitude { '13.37' }
    longitude { '13.37' }

    # Handy for specs with more than one record, specifically those specifying
    # update operations
    factory :another_place do
      name { 'Another Name Value' }
      notes { 'Another Notes Value' }
      latitude { '73.31' }
      longitude { '73.31' }
    end

    # Used to generate "models with valid attributes" in specs, e.g. for
    # requests.
    #
    # in specs, e.g. for requests.
    # It can be expanded later if the model gains special attributes.
    factory :complete_place do
      after(:build) do |object|
        object.snapshot.attach(
          io:           File.open(Rails.root.join('spec/fixtures/files/300x300.jpg').to_s),
          filename:     'place_snapshot.jpg',
          content_type: 'image/jpg'
        )

        object.pictures.attach(
          io:           File.open(Rails.root.join('spec/fixtures/files/300x300.jpg').to_s),
          filename:     'place_pictures_1.jpg',
          content_type: 'image/jpg'
        )
      end
    end
    # Used to create "model with invalid attributes" in specs (e.g. requests).
    # Add invalid/empty values here for attributes as you define validations for
    # them in the model.
    #
    # Note that if there are required attachments nothing needs to be added here.
    factory :invalid_place do
      name { nil }
    end
  end
end
