# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri' 


User.destroy_all
Track.destroy_all

#Users
demoUser = User.create({username: 'Demo_User', email: 'Demo_Email', password: '123456'});
mstre = User.create({username: 'mstre', email: 'mstre_music@gmail.com', password: '123456'})

#Tracks
demoTrack = Track.create({artist_id: 1, title: 'Test Track', description: 'Test Description', plays: 400 })


# creating Files from urls
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/skythings.png')


#attach assets to models
mstre.profilepic.attach(io: file, filename: 'bloom.jpg')