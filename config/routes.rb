# frozen_string_literal: true

Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users do
    resources :pets
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
