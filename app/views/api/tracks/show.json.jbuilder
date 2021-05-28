json.partial! "track", track: @track

json.photoUrls url_for(@track.song_art)
json.songUrls url_for(@track.audio_file)