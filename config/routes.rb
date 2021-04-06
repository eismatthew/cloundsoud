Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   

    resources :users, only: [:create, :index]
    resource :session, only: [:new, :create, :destroy]
    resources :tracks, only: [:show, :create, :index, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]

    
  end
end



# 1. Possibly do not need :update for tracks? just :edit?






#nested routes? not sure


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
