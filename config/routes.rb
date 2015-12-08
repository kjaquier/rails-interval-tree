
Rails.application.routes.draw do
  # Landing page
  root 'debate/debate#index'

  namespace :debate do
      resources :user
      resources :debate
      resources :argument
      resources :argument_position
  end
end
