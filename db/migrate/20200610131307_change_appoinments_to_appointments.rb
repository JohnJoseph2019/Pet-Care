# frozen_string_literal: true

class ChangeAppoinmentsToAppointments < ActiveRecord::Migration[6.0]
  def change
    rename_table :appoinments, :appointments
  end
end
