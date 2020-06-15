# frozen_string_literal: true

Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # Original
  resources :users
  resources :pets do
    resources :appointments, only: %i[index create destroy]
  end

  get '/appointments' => 'appointments#all_appointments'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
