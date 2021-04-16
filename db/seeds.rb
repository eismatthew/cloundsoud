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
artist_mstre = User.create({username: 'MSTRE', email: 'mstre_music@gmail.com', password: '123456'})
artist_deathpact = User.create({username: 'Deathpact', email: 'deathpact@email.com', password: '123456'})
artist_krono = User.create({username: 'KRONO', email: 'krono@email.com', password: '123456'})
artist_jackal = User.create({username: 'Jackal', email: 'jackal@email.com', password: '123456'})
artist_squeeda = User.create({username: 'squeeda', email: 'squeeda@email.com', password: '123456'})
artist_killthenoise = User.create({username: 'Kill The Noise', email: 'killthenoise@email.com', password: '123456'})
artist_skrillex = User.create({username: 'Skrillex', email: 'skrillex@email.com', password: '123456'})
arist_medasin = User.create({username: 'Medasin', email: 'medasin@email.com', password: '123456'})
artist_mrcarmack = User.create({username: 'Mr. Carmack', email: 'mrcarmack@email.com', password: '123456'})
demoUser = User.create({username: 'Demo_User', email: 'Demo_Email', password: '123456'})


#Tracks (tracks and their owners are ordered in respective order so that user Id's match with Artist Id's)
track_bloom = Track.create({artist_id: 1, title: 'bloom', description: 'This is one of my own songs! Hope you enjoy.', plays: 0 })
track_lowtide = Track.create({artist_id: 1, title: 'Low Tide', description: 'This song is a nice blend between house music and guitar', plays: 0 })
track_orbital = Track.create({artist_id: 1, title: 'Orbital (ft. squeeda)', description: 'Another song I wrote with my good friend, squeeda', plays: 0 })
track_danger = Track.create({artist_id: 2, title: 'Danger', description: 'Deathpact is an anonymous electronic music artist', plays: 0 })
track_dancin = Track.create({artist_id: 3, title: 'Aaron Smith - Dancin (Krono Remix)', description: '(temporary description)', plays: 0 })
track_feelit = Track.create({artist_id: 4, title: 'Feel It', description: '(temporary description)', plays: 0 })
track_faded = Track.create({artist_id: 5, title: 'Alan Walker - Faded (squeeda remix)', description: '(temporary description)', plays: 0 })
track_pedals = Track.create({artist_id: 5, title: 'Biblio - Pedals (squeeda remix)', description: '(temporary description)', plays: 0 })
track_skythings = Track.create({artist_id: 5, title: 'sky things', description: 'the best lofi song you will ever hear', plays: 0 })
track_aimh = Track.create({artist_id: 6, title: 'All In My Head (ft. AWOLNATION)', description: '(temporary description)', plays: 0 })
track_mumbai = Track.create({artist_id: 7, title: 'Mumbai Power (ft. BEAM)', description: '(temporary description)', plays: 0 })
track_ramen = Track.create({artist_id: 8, title: 'Ramen', description: '(temporary description)', plays: 0 })
track_springshit = Track.create({artist_id: 9, title: 'Spring Shit (ft. Jacuzzi)', description: '(temporary description)', plays: 0 })


# :song_art Image Files
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/aimh_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/bloom_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/dancin_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/danger_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/feelit_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/lowtide_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/mumbai_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/orbital_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/pedals_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/ramen_songart.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/skythings_songart.png')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/squeedafaded_songart.jpg')

# :profilepic Image Files

file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/deathpact_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/jackal_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/krono_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/ktn_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/medasin_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/mrcarmack_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/mstre_profilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/skrillexprofilepic.jpg')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/squeedaprofilepic.jfif')


# Track Audio Files

file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/danger.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Aaron+Smith+-+Dancin+(Remix+by+KRONO).mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/allinmyhead.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Feel+It+(feat.+Anfa+Rose)+(1).mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Low+Tide.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/mumbaipower.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/springshit.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/bloom.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/orbital.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/sky+things.mp3')
file = open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Alan+Walker+-+Faded+(squeeda+remix).mp3')








#attach assets to models
mstre.profilepic.attach(io: file, filename: 'bloom.jpg')