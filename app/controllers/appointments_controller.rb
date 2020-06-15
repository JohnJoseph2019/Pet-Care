# frozen_string_literal: true

class AppointmentsController < ApplicationController
  before_action :authorize_request
  before_action :set_appointment, only: %i[destroy update]

  # GET pets/:pet_id/appointments
  def index
    @appointments = Appointment.where(pet_id: params[:pet_id])
    render json: @appointments
  end

  # POST pets/:pet_id/appointments
  def create
    @appointment = Appointment.new(appointment_params)
    @appointment.pet = Pet.find(params[:pet_id])

    if @appointment.save
      render json: @appointment, status: :created
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT pets/:pet_id/appointments/:id
  def update
    @appointment.user = @current_user
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # GET /appointments
  def all_appointments
    @appointments = Appointment.all
    render json: @appointments
  end

  # DELETE appointments/:pet_id/appointments/1
  def destroy
    @appointment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def appointment_params
    params.require(:appointment).permit(:restriction_note, :accepted, :start_date, :end_date)
  end
end
