class CoursesWithUsersSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructor
  has_many :users
end
