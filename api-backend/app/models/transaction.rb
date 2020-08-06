class CategoryValidator < ActiveModel::Validator
  def validate(record)
    if (record.group == 'expense' && record.category == 'invoice') ||
      (record.group == 'income' && record.category != 'invoice')
      record.errors[:category] << 'Category must be part of the appropiate group'
    end
  end
end

class Transaction < ApplicationRecord
  validates :group, presence: true
  validates :category, presence: true
  validates :amount_cents, presence: true, numericality: { greater_than: 0 }
  validates :amount_currency, presence: true
  validates :description, presence: true
  validates :operation_date, presence: true

  validates_with CategoryValidator

  enum group: { income: 0, expense: 1 }
  enum category: {
    invoice: 0,
    purchase: 1,
    payroll: 2,
    administrative: 3,
    other: 4,
  }

  monetize :amount_cents
end
