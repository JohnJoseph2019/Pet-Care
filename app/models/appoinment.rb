# frozen_string_literal: true

class Appoinment < ApplicationRecord
  belongs_to :user , optional: true
  belongs_to :pet
end
