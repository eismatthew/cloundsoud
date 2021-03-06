class Api::TracksController < ApplicationController


    def create
        @track = Track.new(track_params)
        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def show
        @track = Track.find_by(id: params[:id])
        render :show
    end

    def index
        @tracks = Track.all
        render :index
    end

    def destroy
        @track = Track.find_by(id: params[:id])
        @track.destroy
        render json: {}
    end

    
    def update
    @track = Track.find_by(id: params[:id])
        if @track.update(track_params)
        render :show
        else
        render json: @track.errors.full_messages, status: 422
        end
    end

    private
    def track_params
        params.require(:track).permit(:artist_id, :title, :description, :plays, :audio_file, :song_art)
    end
end