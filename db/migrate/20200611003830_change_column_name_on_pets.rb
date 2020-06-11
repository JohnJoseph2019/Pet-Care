# frozen_string_literal: true

class ChangeColumnNameOnPets < ActiveRecord::Migration[6.0]
  def change
    rename_column :pets, :domestice_type, :pet_type
  end
end
