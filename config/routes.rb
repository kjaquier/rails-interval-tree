
Rails.application.routes.draw do
  # Landing page
  root 'intervals/root#index'

  namespace :intervals do
      resources :root, only: [:index, :show, :create, :destroy]
      resources :node, only: [:create, :destroy]
  end
end
