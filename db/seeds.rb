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

#artists
artist_mstre = User.create({username: 'MSTRE', email: 'mstre_music@gmail.com', password: '123456'})

artist_deathpact = User.create({username: 'Deathpact', email: 'deathpact@email.com', password: '123456'})

artist_krono = User.create({username: 'KRONO', email: 'krono@email.com', password: '123456'})

artist_jackal = User.create({username: 'Jackal', email: 'jackal@email.com', password: '123456'})

artist_squeeda = User.create({username: 'squeeda', email: 'squeeda@email.com', password: '123456'})

artist_killthenoise = User.create({username: 'Kill The Noise', email: 'killthenoise@email.com', password: '123456'})

artist_skrillex = User.create({username: 'Skrillex', email: 'skrillex@email.com', password: '123456'})

arist_medasin = User.create({username: 'Medasin', email: 'medasin@email.com', password: '123456'})

artist_mrcarmack = User.create({username: 'Mr. Carmack', email: 'mrcarmack@email.com', password: '123456'})

#demouser
demoUser = User.create({username: 'Demo_User', email: 'Demo_Email', password: '123456'})


#Tracks (tracks and their owners are ordered in respective order so that user Id's match with Artist Id's)
track_bloom = Track.create({artist_id: 1, title: 'bloom', description: 'This is one of my own songs! Hope you enjoy.', plays: 0 })
track_bloom_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/bloom.mp3')
track_bloom.audio_file.attach(io: track_bloom_audio, filename: 'bloom.mp3')


track_lowtide = Track.create({artist_id: 1, title: 'Low Tide', description: 'This song is a nice blend between house music and guitar', plays: 0 })
track_lowtide_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Low+Tide.mp3')
track_lowtide.audio_file.attach(io: track_lowtide_audio, filename: 'lowtide.mp3')


track_orbital = Track.create({artist_id: 1, title: 'Orbital (ft. squeeda)', description: 'Another song I wrote with my good friend, squeeda', plays: 0 })
track_orbital_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/orbital.mp3')
track_orbital.audio_file.attach(io: track_orbital_audio, filename: 'orbital.mp3')


track_danger = Track.create({artist_id: 2, title: 'Danger', description: 'Deathpact is an anonymous electronic music artist', plays: 0 })
track_danger_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/danger.mp3')
track_danger.audio_file.attach(io: track_danger_audio, filename: 'danger.mp3')


track_dancin = Track.create({artist_id: 3, title: 'Aaron Smith - Dancin (Krono Remix)', description: '(temporary description)', plays: 0 })
track_dancin_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Aaron+Smith+-+Dancin+(Remix+by+KRONO).mp3')
track_dancin.audio_file.attach(io: track_dancin_audio, filename: 'dancin.mp3')


track_feelit = Track.create({artist_id: 4, title: 'Feel It', description: '(temporary description)', plays: 0 })
track_feelit_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Feel+It+(feat.+Anfa+Rose)+(1).mp3')
track_feelit.audio_file.attach(io: track_feelit_audio, filename: 'feelit.mp3')


track_faded = Track.create({artist_id: 5, title: 'Alan Walker - Faded (squeeda remix)', description: '(temporary description)', plays: 0 })
track_faded_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Alan+Walker+-+Faded+(squeeda+remix).mp3')
track_faded.audio_file.attach(io: track_faded_audio, filename: 'faded.mp3')


track_pedals = Track.create({artist_id: 5, title: 'Biblio - Pedals (squeeda remix)', description: '(temporary description)', plays: 0 })
track_pedals_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/pedals.mp3')
track_pedals.audio_file.attach(io: track_pedals_audio, filename: 'pedals.mp3')


track_skythings = Track.create({artist_id: 5, title: 'sky things', description: 'the best lofi song you will ever hear', plays: 0 })
track_skythings_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/sky+things.mp3')
track_skythings.audio_file.attach(io: track_skythings_audio, filename: 'skythings.mp3')


track_aimh = Track.create({artist_id: 6, title: 'All In My Head (ft. AWOLNATION)', description: '(temporary description)', plays: 0 })
track_aimh_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/allinmyhead.mp3')
track_aimh.audio_file.attach(io: track_aimh_audio, filename: 'aimh.mp3')


track_mumbai = Track.create({artist_id: 7, title: 'Mumbai Power (ft. BEAM)', description: '(temporary description)', plays: 0 })
track_mumbai_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/mumbaipower.mp3')
track_mumbai.audio_file.attach(io: track_mumbai_audio, filename: 'mumbai.mp3')


track_ramen = Track.create({artist_id: 8, title: 'Ramen', description: '(temporary description)', plays: 0 })
track_ramen_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/ramen.mp3')
track_ramen.audio_file.attach(io: track_ramen_audio, filename: 'ramen.mp3')


track_springshit = Track.create({artist_id: 9, title: 'Spring Shit (ft. Jacuzzi)', description: '(temporary description)', plays: 0 })
track_springshit_audio = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/springshit.mp3') 
track_springshit.audio_file.attach(io: track_springshit_audio, filename: 'springshit.mp3')





# :song_art Image Files
song_art1 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/bloom_songart.jpg')
song_art2 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/lowtide_songart.jpg')
song_art3 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/orbital_songart.jpg')
song_art4 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/danger_songart.jpg')
song_art5 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/dancin_songart.jpg')
song_art6 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/feelit_songart.jpg')
song_art7 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/squeedafaded_songart.jpg')
song_art8 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/pedals_songart.jpg')
song_art9 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/skythings_songart.png')
song_art10 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/aimh_songart.jpg')
song_art11 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/mumbai_songart.jpg')
song_art12 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/ramen_songart.jpg')
song_art13 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Songart/mr+carmack+jacuzzi.jpg')



track_bloom.song_art.attach(io: song_art1, filename: 'bloomart img')
track_lowtide.song_art.attach(io: song_art2, filename: 'lowtideart img')
track_orbital.song_art.attach(io: song_art3, filename: 'orbitalart img')
track_danger.song_art.attach(io: song_art4, filename: 'dangerart img')
track_dancin.song_art.attach(io: song_art5, filename: 'dancinart img')
track_feelit.song_art.attach(io: song_art6, filename: 'feelitart img')
track_faded.song_art.attach(io: song_art7, filename: 'fadedart img')
track_pedals.song_art.attach(io: song_art8, filename: 'pedalsart img')
track_skythings.song_art.attach(io: song_art9, filename: 'skythingsart img')
track_aimh.song_art.attach(io: song_art10, filename: 'aimhart img')
track_mumbai.song_art.attach(io: song_art11, filename: 'mumbaiart img')
track_ramen.song_art.attach(io: song_art12, filename: 'ramenart img')
track_springshit.song_art.attach(io: song_art13, filename: 'springshitart img')






# :profilepic Image Files
profile1 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/mstre_profilepic.jpg')
profile2 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/deathpact_profilepic.jpg')
profile3 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/krono_profilepic.jpg')
profile4 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/jackal_profilepic.jpg')
profile5 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/squeedaprofilepic.jfif')
profile6 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/ktn_profilepic.jpg')
profile7 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/skrillexprofilepic.jpg')
profile8 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/medasin_profilepic.jpg')
profile9 = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Profilepics/mrcarmack_profilepic.jpg')



# Track Audio Files

# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/danger.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Aaron+Smith+-+Dancin+(Remix+by+KRONO).mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/allinmyhead.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Feel+It+(feat.+Anfa+Rose)+(1).mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Low+Tide.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/mumbaipower.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/springshit.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/bloom.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/orbital.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/sky+things.mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/Alan+Walker+-+Faded+(squeeda+remix).mp3')
# file = URI.open('https://cloundsoud-seeds.s3-us-west-1.amazonaws.com/Audio/pedals.mp3')




#attach assets to models
artist_mstre.profilepic.attach(io: profile1, filename: 'mstre_profilepic.jpg')
artist_deathpact.profilepic.attach(io: profile2, filename: 'deathpact_profilepic.jpg')
artist_krono.profilepic.attach(io: profile3, filename: 'krono_profilepic.jpg')
artist_jackal.profilepic.attach(io: profile4, filename: 'jackal_profilepic.jpg')
artist_squeeda.profilepic.attach(io: profile5, filename: 'squeedaprofilepic.jfif')
artist_killthenoise.profilepic.attach(io: profile6, filename: 'ktn_profilepic.jpg')
artist_skrillex.profilepic.attach(io: profile7, filename: 'skrillexprofilepic.jpg')
arist_medasin.profilepic.attach(io: profile8, filename: 'medasin_profilepic.jpg')
artist_mrcarmack.profilepic.attach(io: profile9, filename: 'mrcarmack_profilepic.jpg')



#demouser
demoUser = User.create({username: 'Demo_User', email: 'Demo_Email', password: '123456'})