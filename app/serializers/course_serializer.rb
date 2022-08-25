class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :instructor
end
