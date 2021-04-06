class LikesController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]


    def create
    end

    def destroy
    end


    private
    def like_params
        params.require(:like).permit(:user_id, :track_id)
    end
end
