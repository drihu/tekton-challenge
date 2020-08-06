class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.string :phone_number
      t.integer :gender
      t.date :birthday

      t.timestamps
    end
  end
end
