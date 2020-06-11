# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Appointment.destroy_all
Pet.destroy_all
User.destroy_all

userOne = User.create!(username: 'ohyea', email: 'aaa@aaa.com', password: '123456')
userTwo = User.create!(username: 'bbbb', email: 'bbb@bbb.com', password: '123456')
userThree = User.create!(username: 'sittr', email: 'sitter@sitter.com', password: '123456', isSitter: true)

petOne = Pet.create!(name: 'mr big', pet_type: 'dog', age: 2, img_url: 'aaa', user: userOne)
petTwo = Pet.create!(name: 'ms bigggggg', pet_type: 'cat', age: 2, img_url: 'bbb', user: userOne)

petThree = Pet.create!(name: 'lucia', pet_type: 'cat', age: 2, img_url: 'bbb', user: userTwo)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petOne)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petOne)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet: petThree, user: userThree)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petTwo)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petTwo)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet: petTwo, user: userThree)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petThree)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet: petThree)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet: petThree, user: userThree)
