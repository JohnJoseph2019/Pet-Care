# frozen_string_literal: true

class ChangeAppointmentsNUll < ActiveRecord::Migration[6.0]
  def change
    change_column_null :appointments, :pet_id, true
  end
end
