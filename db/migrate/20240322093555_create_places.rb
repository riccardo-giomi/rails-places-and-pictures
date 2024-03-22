class CreatePlaces < ActiveRecord::Migration[7.1]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.text :notes
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
