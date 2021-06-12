json.partial! "api/users/user", user: @user


# if @user.profilepic 
json.photoUrls url_for(@user.profilepic) 