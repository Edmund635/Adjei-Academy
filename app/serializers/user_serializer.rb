class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :courses
  has_one :contact_info
end
