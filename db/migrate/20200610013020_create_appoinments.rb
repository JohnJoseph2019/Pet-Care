# frozen_string_literal: true

class CreateAppoinments < ActiveRecord::Migration[6.0]
  def change
    create_table :appoinments do |t|
      t.string :restriction_note
      t.boolean :accepted
      t.datetime :start_date
      t.datetime :end_date
      t.references :user, foreign_key: true
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
