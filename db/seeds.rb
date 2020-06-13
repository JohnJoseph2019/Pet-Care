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

user_one = User.create!(username: 'Ronda11', email: 'echo@aaa.com', password: '123456', img_url: 'https://i.pinimg.com/564x/a6/bb/a9/a6bba9af0462304416811ff7479170f7.jpg', isSitter: false)
user_two = User.create!(username: 'recman11', email: 'charlyb@bbb.com', password: '123456', img_url: 'https://mpk-photo.com/wp-content/uploads/CV108_300.gif', isSitter: false)
user_three = User.create!(username: 'IgotYou', email: 'delta@sitter.com', password: '123456', img_url: 'https://i.imgur.com/8wyiI7g.jpg', isSitter: true)

pet_one = Pet.create!(name: 't-rex', pet_type: 'dog', age: 2, breed: 'german shepherd', img_url: 'https://i.ytimg.com/vi/r2riqIgOeoU/maxresdefault.jpg', user: user_one)
pet_two = Pet.create!(name: 'lucia', pet_type: 'cat', age: 2, breed: 'bengal', img_url: 'https://i.pinimg.com/originals/3e/63/c7/3e63c71551da20493e3c1b302954fd65.jpg', user: user_one)

pet_three = Pet.create!(name: 'ga', pet_type: 'cat', age: 2, breed: 'chartreux', img_url: 'https://cats.lovetoknow.com/image/257354~chartreux-cat-breed-profile.jpg', user: user_two)

pet_four = Pet.create!(name: 'hercules', pet_type: 'cat', age: 2, breed: 'turkish van', img_url: 'http://iheartcats.com/wp-content/uploads/2015/03/turkish-van-full.jpg', user: user_one)
pet_five = Pet.create!(name: 'kiki', pet_type: 'bird', age: 2, breed: 'cockatoo', img_url: 'https://thegabrielfoundation.org/wp-content/uploads/2018/01/Sydney-1.jpg', user: user_two)

Appointment.create!(restriction_note: 'make sure he eat all his food in the morning', accepted: false, start_date: '2020/06/14', end_date: '2020/06/15', pet: pet_one)
Appointment.create!(restriction_note: 'make sure he eat all his food in the morning', accepted: false, start_date: '2020/06/20', end_date: '2020/06/22', pet: pet_one)

Appointment.create!(restriction_note: 'Please just make sure she stays away from my room', accepted: true, start_date: '2020/06/11', end_date: '2020/06/12', pet: pet_three, user: user_three)
Appointment.create!(restriction_note: 'she needs to sleep by 9pm', accepted: true, start_date: '2020/06/05', end_date: '2020/06/08', pet: pet_one, user: user_three)

Appointment.create!(restriction_note: 'none', accepted: false, start_date: '2020/06/22', end_date: '2020/06/23', pet: pet_two)
Appointment.create!(restriction_note: 'none', accepted: false, start_date: '2020/06/25', end_date: '2020/06/26', pet: pet_four)

Appointment.create!(restriction_note: 'make sure take her medicine twice a day', accepted: false, start_date: '2020/06/18', end_date: '2020/06/19', pet: pet_five)
Appointment.create!(restriction_note: 'none', accepted: false, start_date: '2020/06/30', end_date: '2020/07/2', pet: pet_four)
Appointment.create!(restriction_note: 'none', accepted: false, start_date: '2020/06/23', end_date: '2020/06/26', pet: pet_four)
