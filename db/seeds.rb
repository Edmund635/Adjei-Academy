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
course2 = Course.create(title: 'Course2', description: 'Course 2 stuff', instructor: 'Edmund Adjei')
course3 = Course.create(title: 'Course3', description: 'Course 3 stuff', instructor: 'Edmund Adjei')
course4 = Course.create(title: 'Course4', description: 'Course 4 stuff', instructor: 'Edmund Adjei')
course5 = Course.create(title: 'Course5', description: 'Course 5 stuff', instructor: 'Edmund Adjei')
course6 = Course.create(title: 'Course6', description: 'Course 6 stuff', instructor: 'Edmund Adjei')
course7 = Course.create(title: 'Course7', description: 'Course 7 stuff', instructor: 'Edmund Adjei')
course8 = Course.create(title: 'Course8', description: 'Course 8 stuff', instructor: 'Edmund Adjei')
course9 = Course.create(title: 'Course8', description: 'Course 9 stuff', instructor: 'Edmund Adjei')
course10 = Course.create(title: 'Course10', description: 'Course 10 stuff', instructor: 'Edmund Adjei')
course11 = Course.create(title: 'Course11', description: 'Course 11 stuff', instructor: 'Edmund Adjei')
course12 = Course.create(title: 'Course12', description: 'Course 12 stuff', instructor: 'Edmund Adjei')



#Enrollments
enrollment1 = Enrollment.create(user: user1, course: course1)


#ContactInfo
contactInfos1 = ContactInfo.create(user: user1, last_name: 'Adjei', first_name: 'Edmund', email: 'adjei@example.com', city: 'San Francisco', phone_number: '3476157764', age: 34)
