# frozen_string_literal: true

RSpec.describe '/places' do
  context 'with a valid existing record' do
    let!(:place) { create(:complete_place) }

    describe 'GET /index' do
      it 'renders a successful response' do
        get places_url
        expect(response).to be_successful
      end
    end

    describe 'GET /show' do
      it 'renders a successful response' do
        get place_url(place)
        expect(response).to be_successful
      end
    end

    describe 'GET /edit' do
      it 'renders a successful response' do
        get edit_place_url(place)
        expect(response).to be_successful
      end
    end

    describe 'PATCH /update' do
      context 'with valid update attributes' do
        let(:valid_attributes) { attributes_for(:another_place) }

        it 'updates the requested place' do
          patch place_url(place), params: { place: valid_attributes }
          place.reload
          attributes = place.slice(valid_attributes.keys).symbolize_keys

          expect(attributes).to eq(valid_attributes)
        end

        it 'redirects to the place' do
          patch place_url(place), params: { place: valid_attributes }
          place.reload
          expect(response).to redirect_to(place_url(place))
        end
      end

      context 'with invalid update attributes' do
        let(:invalid_attributes) { attributes_for(:invalid_place) }

        it 'renders a response with 422 status (i.e. to display the "edit" template)' do
          patch place_url(place), params: { place: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe 'DELETE /destroy' do
      it 'destroys the requested place' do
        expect do
          delete place_url(place)
        end.to change(Place, :count).by(-1)
      end

      it 'redirects to the places list' do
        delete place_url(place)
        expect(response).to redirect_to(places_url)
      end
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_place_url
      expect(response).to be_successful
    end
  end

  context 'with a valid new object' do
    let(:valid_attributes) { attributes_for(:complete_place) }

    describe 'POST /create' do
      it 'creates a new Place' do
        expect do
          post places_url, params: { place: valid_attributes }
        end.to change(Place, :count).by(1)
      end

      it 'redirects to the created place' do
        post places_url, params: { place: valid_attributes }
        expect(response).to redirect_to(place_url(Place.last))
      end
    end
  end

  context 'with an invalid new object' do
    let(:invalid_attributes) { attributes_for(:invalid_place) }

    describe 'POST /create' do
      it 'does not create a new Place' do
        expect do
          post places_url, params: { place: invalid_attributes }
        end.not_to change(Place, :count)
      end

      it 'renders a response with 422 status (i.e. to display the "new" template)' do
        post places_url, params: { place: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
