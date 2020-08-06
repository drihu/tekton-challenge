class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :group
      t.integer :category
      t.integer :amount_cents
      t.string :amount_currency
      t.text :description
      t.date :operation_date

      t.timestamps
    end
  end
end
