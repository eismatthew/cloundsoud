class Api::UsersController < ApplicationController
require 'open-uri' 
   

    def create
        @user = User.new(user_params)
        profile1 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/mstre_profilepic.jpg')
        @user.profilepic.attach(io: profile1, filename: 'mstre_profilepic.jpg')
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

  
    

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :profilepic)
    end

end
