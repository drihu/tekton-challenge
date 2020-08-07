class AddPhotoUrlToEmployees < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :photo_url, :string
  end
end
