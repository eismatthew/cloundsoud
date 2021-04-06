class CommentsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = params[:user_id]
        if @comment.save
            # redirect_to / render ?
        else
            flash[:errors] = @comments.errors.full_messages
           # redirect_to / render?
        end
    end

    def destroy
        @comment = current_user.comments.find_by(id: params[:id])
        if @comment && @comment.destroy
            #redirect_to(api_track_url) / render ?
        end
        #redirect_to(api_track_url)  / render
    end




    private
    def comment_params
        params.require(:comment).permit(:body, :user_id, :track_id)
    end

end
