# frozen_string_literal: true

class PicturesController < ApplicationController
  include Pagy::Backend

  before_action :set_picture, only: %i[show edit update destroy]

  # GET /places or /places.json
  def index
    @pagy, @pictures = pagy(Picture.all)
  end

  # GET /pictures/1 or /pictures/1.json
  def show; end

  # GET /pictures/new
  def new
    @picture = Picture.new
  end

  # GET /pictures/1/edit
  def edit; end

  # POST /pictures or /pictures.json
  def create
    @picture = Picture.new(picture_params)

    respond_to do |format|
      if @picture.save
        format.html { redirect_to picture_url(@picture), notice: 'Picture was successfully created.' }
        format.json { render :show, status: :created, location: @picture }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pictures/1 or /pictures/1.json
  def update
    respond_to do |format|
      attributes = params_with_file_removal
      if @picture.update(attributes)
        format.html { redirect_to picture_url(@picture), notice: 'Picture was successfully updated.' }
        format.json { render :show, status: :ok, location: @picture }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @picture.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pictures/1 or /pictures/1.json
  def destroy
    @picture.destroy!

    respond_to do |format|
      format.html { redirect_to pictures_url, notice: 'Picture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_picture
    @picture = Picture.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def picture_params
    params
      .require(:picture)
      .permit(:description, :notes, :file, :place_id)
  end

  # Allow web requests to remove single attachments by setting the param value to nil.
  # This allowes single and multi attachments to behave the same way, but it
  # requires non-JSON requests to always specify attachments that we want to
  # keep (by file signed-id).
  def params_with_file_removal
    attributes = picture_params
    attributes['file'] ||= '' if request.format.html?
    attributes
  end
end
