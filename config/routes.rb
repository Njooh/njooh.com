Rails.application.routes.draw do
  root 'home#index'
  get '/legal/terms', to: 'home#terms'
  get '/about/policy', to: 'home#policy'
  get '/njooh', to: 'home#about'
  get '/jobs', to: 'home#jobs'
  get '/support', to: 'home#support'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
