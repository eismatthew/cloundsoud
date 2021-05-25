json.partial! "track", track: @track

json.photoUrls @track.song_art.map { |file| url_for(file) }
json.songUrls @track.audio_file.map { |file| url_for(file) }