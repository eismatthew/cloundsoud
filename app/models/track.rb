class Track < ApplicationRecord
    validates :title, presence: true
    validates :description
    validates :artist_id, presence: true

    belongs_to :user,
    foreign_key: :artist_id,
    class_name: :User

    has_many :likes, 
    foreign_key: :like_id,
    class_name: :Like

    has_many :comments,
    foreign_key: :comment_id,
    class_name: :Comment
   
end
