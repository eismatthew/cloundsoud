json.partial! "track", track: @track

json.photoUrls @track.songart.map { |file| url_for(file) }
json.songUrls @track.audio.map { |file| url_for(file) }