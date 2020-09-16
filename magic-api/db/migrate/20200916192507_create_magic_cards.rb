class CreateMagicCards < ActiveRecord::Migration[6.0]
  def change
    create_table :magic_cards do |t|
      t.string :name
      t.string :imageURL
      t.timestamps
    end
  end
end
