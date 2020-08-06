require 'rails_helper'
require 'faker'

describe TransactionsController do
  before(:each) do
    @transaction = Transaction.create!(
      group: 'income',
      category: 'invoice',
      amount: Faker::Commerce.price,
      description: Faker::Commerce.product_name,
      operation_date: Faker::Date.between(from: 60.days.ago, to: Date.today),
    )
  end

  context 'GET to index' do
    before(:each) do
      get :index
    end

    it 'returns an http status ok' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns a json with all transactions' do
      transactions = JSON.parse(response.body)
      expect(transactions.size).to eq(1)
    end
  end

  context 'GET to show' do
    before(:each) do
      get :show, params: { id: @transaction.id }
    end

    it 'return an http status ok' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns the correct transaction' do
      get :show, params: { id: @transaction.id }
      expected_transaction = JSON.parse(response.body)
      expect(expected_transaction['id']).to eq(@transaction.id)
    end
  end
end
