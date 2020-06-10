# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'ohyea', email: 'aaa@aaa.com', password: '123456')
User.create!(username: 'bbbb', email: 'bbb@bbb.com', password: '123456')
User.create!(username: 'sittr', email: 'sitter@sitter.com', password: '123456', isSitter: true)

Pet.create!(name: 'mr big', domestice_type: 'dog', age: 2, img_url: 'aaa', user_id: 1)
Pet.create!(name: 'ms bigggggg', domestice_type: 'cat', age: 2, img_url: 'bbb', user_id: 1)

Pet.create!(name: 'lucia', domestice_type: 'cat', age: 2, img_url: 'bbb', user_id: 2)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 1)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 1)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 1, user_id: 3)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 2)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 2)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 2, user_id: 3)

Appointment.create!(restriction_note: 'this will be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 3)
Appointment.create!(restriction_note: 'this willllllllllll be deleted', accepted: false, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 3)
Appointment.create!(restriction_note: 'no deleted this is TRUE', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet_id: 3, user_id: 3)
