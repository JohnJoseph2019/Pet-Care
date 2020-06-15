# frozen_string_literal: true

Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/appointments', to: 'appointments#all_appointments'

  # Original
  resources :users
  resources :pets do
    resources :appointments
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
