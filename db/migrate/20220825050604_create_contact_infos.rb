class CreateContactInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :contact_infos do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :last_name
      t.string :first_name
      t.string :email
      t.string :city
      t.string :phone_number
      t.integer :age


      t.timestamps
    end
  end
end
