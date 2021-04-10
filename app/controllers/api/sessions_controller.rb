class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]


    def create
        @user = User.find_by_credentials(params[:user][:credentials], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid login credentials'], status: 422
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: {}
        else
            render json: ['A user is not currently logged in'], status: 404
        end
    end

end
