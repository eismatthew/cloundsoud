json.extract! user, :id, :email, :username

if user.profilepic.attached?
    json.profilePic url_for(user.profilepic)
end