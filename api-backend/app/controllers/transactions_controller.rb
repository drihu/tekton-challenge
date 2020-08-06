class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all.order(operation_date: :desc)
    render json: transactions, status: :ok
  end

  def show
    id = params[:id]
    transaction = Transaction.find(id)
    render json: transaction, status: :ok
  end
end
