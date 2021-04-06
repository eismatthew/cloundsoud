class Api::UsersController < ApplicationController
    before_action: require_logged_in, only: [:index, :show]


    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/tracks'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def show
    #     @user = User.find_by(id: params[:id])
    #     render :show
    # end

    def new
        @user = User.new
        render :new
    end


    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
