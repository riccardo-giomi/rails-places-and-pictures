class CreatePictures < ActiveRecord::Migration[7.1]
  def change
    create_table :pictures do |t|
      t.string :description, null: false
      t.text :notes
      t.references :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
