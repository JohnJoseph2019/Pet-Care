# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # Here only validates on create nothing else.... so I can edit
  validates :password, length: { minimum: 6 }, on: :create

  has_many :pets, dependent: :destroy
  has_many :appointments
end
