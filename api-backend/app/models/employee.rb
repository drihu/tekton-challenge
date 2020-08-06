class Employee < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :position, presence: true
  validates :email, presence: true
  validates :phone_number, presence: true

  enum gender: { male: 0, female: 1 }
end
