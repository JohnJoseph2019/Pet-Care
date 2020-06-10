# frozen_string_literal: true

class AppointmentsController < ApplicationController
  # GET pets/:pet_id/appointments
  def index
    @appointments = Appointment.where(pet_id: params[:pet_id])
    render json: @appointments
  end

  # POST pets/:pet_id/appointments
  def create; end

  # DELETE pets/:pet_id/appointments/1
  def destroy; end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pet
    @pet = @current_user.pets.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def pet_params
    params.require(:pet).permit(:name, :domestice_type, :breed, :age, :img_url)
  end
end
