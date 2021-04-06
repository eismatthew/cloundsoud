class Api::SessionController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def new
        render 'api/session/new'
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )
        if @user
            login(@user)
           render 'api/tracks' 
        else
            render json: ['Invalid email or password'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render 'api/session/new' 
        else
            render json: ['A user is not currently logged in'], status: 404
        end
    end


end
