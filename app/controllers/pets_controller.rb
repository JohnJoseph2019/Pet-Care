# frozen_string_literal: true

class PetsController < ApplicationController
  before_action :authorize_request
  before_action :set_pet, only: %i[show update destroy]
  before_action :cleanup, only: [:destroy]
  # GET /pets
  def index
    # @current_user.pets
    # @pets = Pet.all
    render json: @current_user.pets, include: :appointments
  end

  # GET /pets/1
  def show
    # @pet = Pet.find(params[:id])
    render json: @pet, include: :appointments
    # render json: @current_user.pets.find(params[:id]), include: :appointments
  end

  # POST /pets
  def create
    @pet = Pet.new(pet_params)
    @pet.user = @current_user

    if @pet.save
      render json: @pet, status: :created
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pet
    @pet = @current_user.pets.find(params[:id])
  end

  def cleanup
    Appointment.where(pet_id: @pet.id, accepted: false).destroy_all
    Appointment.where(pet_id: @pet.id).update_all(pet_id: '')
  end

  # Only allow a trusted parameter "white list" through.
  def pet_params
    params.require(:pet).permit(:name, :pet_type, :breed, :age, :img_url)
  end
end
