class Api::TracksController < ApplicationController

    def show
    end

    def create
    end

    def index
    end

    def update
    end

    def destroy
    end

    
    private
    def track_params
        params.require(:track).permit(:title, :description, :artist_id)
    end
end
