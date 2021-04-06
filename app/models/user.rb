class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_many :tracks,
    foreign_key: :artist_id,
    class_name: :Track

    has_many :track_likes, 
    through: :tracks,
    source: :like

    has_many :track_comments,
    through: :tracks,
    source: :comment



    attr_reader :password
    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password)  ? user : nil
    end


    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
    
end
