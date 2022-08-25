class ContactInfoSerializer < ActiveModel::Serializer
  attributes :id, :last_name, :first_name, :city, :phone_number, :age, :email
  has_one :user
end
