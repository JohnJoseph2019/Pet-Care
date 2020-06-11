# frozen_string_literal: true

class Pet < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :appointments, dependent: :nullify
end
