Rails.application.routes.draw do


  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
   
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
 
  end
end













# resources :tracks, only: [:show, :create, :index, :update, :destroy]
# resources :likes, only: [:create, :destroy]
# resources :comments, only: [:create, :destroy]



# 1. Possibly do not need :update for tracks? just :edit?

# 2. nested routes? not sure


# Rails.application.routes.draw do
#   namespace :api, defaults: {format: :json} do
#     resource :session, only: [:new, :create, :destroy]

#     resources :users, only: [:new, :create, :index, :show] do
#       resources :tracks, only: [:new, :create, :index]
#       resources :likes, only: [:index]
#     end

#     resources :tracks, only: [:update, :edit, :show, :destroy] do
#       resources :comments, only: [:index]
#     end

#     resources :comments, only: [:show, :create, :destroy]
#     resources :likes, only: [:create, :destroy]
#   end
# end
