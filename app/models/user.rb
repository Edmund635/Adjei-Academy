class User < ApplicationRecord
    has_many :enrollments, dependent: :destroy
    has_many :courses, through: :enrollments
    has_one :contact_info

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
