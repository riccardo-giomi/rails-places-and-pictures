# frozen_string_literal: true

RSpec.describe '/pictures' do
  context 'with a valid existing record' do
    let!(:picture) { create(:complete_picture) }

    describe 'GET /index' do
      it 'renders a successful response' do
        get pictures_url
        expect(response).to be_successful
      end
    end

    describe 'GET /show' do
      it 'renders a successful response' do
        get picture_url(picture)
        expect(response).to be_successful
      end
    end

    describe 'GET /edit' do
      it 'renders a successful response' do
        get edit_picture_url(picture)
        expect(response).to be_successful
      end
    end

    describe 'PATCH /update' do
      context 'with valid update attributes' do
        let(:valid_attributes) { attributes_for(:another_picture) }

        it 'updates the requested picture' do
          patch picture_url(picture), params: { picture: valid_attributes }
          picture.reload
          attributes = picture.slice(valid_attributes.keys).symbolize_keys

          expect(attributes).to eq(valid_attributes)
        end

        it 'redirects to the picture' do
          patch picture_url(picture), params: { picture: valid_attributes }
          picture.reload
          expect(response).to redirect_to(picture_url(picture))
        end
      end

      context 'with invalid update attributes' do
        let(:invalid_attributes) { attributes_for(:invalid_picture) }

        it 'renders a response with 422 status (i.e. to display the "edit" template)' do
          patch picture_url(picture), params: { picture: invalid_attributes }
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe 'DELETE /destroy' do
      it 'destroys the requested picture' do
        expect do
          delete picture_url(picture)
        end.to change(Picture, :count).by(-1)
      end

      it 'redirects to the pictures list' do
        delete picture_url(picture)
        expect(response).to redirect_to(pictures_url)
      end
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_picture_url
      expect(response).to be_successful
    end
  end

  context 'with a valid new object' do
    let(:valid_attributes) do
      attributes_for(:complete_picture, place_id: create(:place).id)
    end

    describe 'POST /create' do
      it 'creates a new Picture' do
        expect do
          post pictures_url, params: { picture: valid_attributes }
        end.to change(Picture, :count).by(1)
      end

      it 'redirects to the created picture' do
        post pictures_url, params: { picture: valid_attributes }
        expect(response).to redirect_to(picture_url(Picture.last))
      end
    end
  end

  context 'with an invalid new object' do
    let(:invalid_attributes) { attributes_for(:invalid_picture) }

    describe 'POST /create' do
      it 'does not create a new Picture' do
        expect do
          post pictures_url, params: { picture: invalid_attributes }
        end.not_to change(Picture, :count)
      end

      it 'renders a response with 422 status (i.e. to display the "new" template)' do
        post pictures_url, params: { picture: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
