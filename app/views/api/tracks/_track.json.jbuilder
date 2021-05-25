json.extract! track, :id, :title, :description, :artist_id, :plays
json.artist track.artist.username

if track.song_art.attached?
    json.albumArt url_for(track.song_art)
end

if track.audio_file.attached?
    json.audioFile url_for(track.audio_file)
else
  json.audioFile ""
end

