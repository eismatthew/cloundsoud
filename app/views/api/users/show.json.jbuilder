json.partial! "api/users/user", user: @user


json.photoUrls @user.profilepics.map { |file| url_for(file) }