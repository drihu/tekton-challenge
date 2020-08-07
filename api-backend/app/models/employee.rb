class Employee < ApplicationRecord
  include Rails.application.routes.url_helpers

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :position, presence: true
  validates :email, presence: true
  validates :phone_number, presence: true

  enum gender: { male: 0, female: 1 }

  has_one_attached :avatar

  after_save :add_photo_url, if: :not_photo_url?

  private
  def add_photo_url
    photo_url = url_for(self.avatar)
    self.update(photo_url: photo_url)
  end

  def not_photo_url?
    self.photo_url == nil && self.avatar && self.avatar.attached?
  end
end
