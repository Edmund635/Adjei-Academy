class UsersWithCoursesSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :courses
end
