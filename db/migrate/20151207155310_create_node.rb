class CreateNode < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      t.string :label

      t.integer :left_tree
      t.integer :right_tree
      t.integer :tree_level
      t.integer :root_id
    end
  end
end
