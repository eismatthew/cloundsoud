class Track < ApplicationRecord
    validates :title, :artist_id, presence: true
    validates :title, uniqueness: { scope: :artist_id }, length: { minimum: 1 }


    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    


    
end
