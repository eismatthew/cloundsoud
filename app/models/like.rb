class Like < ApplicationRecord
    validates :user_id, presence: true
    validates :track_id, presence: true

    belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
