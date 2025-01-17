# frozen_string_literal: true

FactoryBot.define do
  factory :place do
    name { 'Name Value' }
    notes { 'Notes Value' }
    latitude { BigDecimal('13.37') }
    longitude { BigDecimal('13.37') }

    # Handy for specs with more than one record, specifically those specifying
    # update operations
    factory :another_place do
      name { 'Another Name Value' }
      notes { 'Another Notes Value' }
      latitude { BigDecimal('73.31') }
      longitude { BigDecimal('73.31') }
    end

    # Used to generate "models with valid attributes" in specs, e.g. for
    # requests.
    #
    # in specs, e.g. for requests.
    # It can be expanded later if the model gains special attributes.
    factory :complete_place do
      after(:build) do |place|
        create_list(:complete_picture, 1, place:)
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
