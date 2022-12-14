Rails.application.routes.draw do
  resources :contact_infos
  resources :enrollments, only: [:create]
  resources :courses, only: [:index, :show]
  resources :users , only: [:index, :show, :create, :destroy]
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/me", to: "users#destroy"
  post "/contact_infos", to: "contact_infos#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
