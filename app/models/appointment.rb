# frozen_string_literal: true

class Appointment < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :pet
end
