class TransactionsController < ApplicationController
  def index
    currency = params.fetch('currency', 'USD')

    transactions = Transaction.all.order(operation_date: :asc).map do |transaction|
      transaction.amount = transaction.amount.exchange_to(currency)
      transaction
    end

    render json: transactions, status: :ok
  end

  def show
    id = params[:id]
    transaction = Transaction.find(id)
    render json: transaction, status: :ok
  end
end
