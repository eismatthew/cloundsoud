# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({username: 'Demo_User', email: 'Demo_Email', password: '123456'})

demoTrack = Track.create({artist_id: 1, title: 'Test Track', description: 'Test Description', plays: 400 })