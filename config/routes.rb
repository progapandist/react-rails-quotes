Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api, defaults: { format: :json } do # routes for JSON endpoints
    resources :quotes, only: [ :show ]
  end
end
