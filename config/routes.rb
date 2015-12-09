
Rails.application.routes.draw do
  # Landing page
  root 'intervals/tree#index'

  namespace :intervals do
      resources :tree
  end
end
