# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users
user1 = User.create(username: 'eddie231', password: '1234')


#Courses 
course1 = Course.create(title: 'Course1', description: 'Course 1 stuff', instructor: 'Edmund Adjei')

#Enrollments
enrollment1 = Enrollment.create(user: user1, course: course1)


#ContactInfo
contactInfos1 = ContactInfo.create(user: user1, last_name: 'Adjei', first_name: 'Edmund', email: 'adjei@example.com', city: 'San Francisco', phone_number: '3476157764', age: 34)
