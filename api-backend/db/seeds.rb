# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts 'Seed: Create Employees'
20.times do |index|
  employee = Employee.create!(
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    position: Faker::Job.position,
    email: Faker::Internet.unique.email,
    phone_number: Faker::PhoneNumber.unique.cell_phone_with_country_code,
    gender: Faker::Gender.binary_type.downcase,
    birthday: Faker::Date.birthday(min_age: 18, max_age: 65),
  )
  employee.avatar.attach(
    io: File.open(Rails.root.join("db/avatars/image-#{index + 1}.png")),
    filename: "image-#{index + 1}.png",
    content_type: 'image/png',
  )
end

puts 'Seed: Create Transactions - Incomes'
200.times do
  Transaction.create!(
    group: 'income',
    category: 0,
    amount: Faker::Commerce.price,
    description: Faker::Commerce.product_name,
    operation_date: Faker::Date.between(from: 60.days.ago, to: Date.today),
  )
end

puts 'Seed: Create Transactions - Expenses'
30.times do
  Transaction.create!(
    group: 'expense',
    category: rand(1..4),
    amount: Faker::Commerce.price(range: 1000..3000.0),
    description: Faker::Commerce.product_name,
    operation_date: Faker::Date.between(from: 60.days.ago, to: Date.today),
  )
end
