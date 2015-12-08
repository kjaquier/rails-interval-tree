##
# We use ActiveType, to manage to cut responsability of the
# fat model Node, into small one.
#
#  FROM https://github.com/makandra/active_type
#  FROM https://leanpub.com/growing-rails
#
class Node::AsRoot < ActiveType::Record[Node]
  ##
  # We don't need to validate presence of indice for
  # root, as we fix them on creation here.
  before_create :create_indices

  ##
  # Need to set root_id to self.id, to handle the root() method nicely.
  after_create :root_to_self

  ##
  # Build a node that will be on the right side of
  # the subtree, a level bigger than the root.
  #
  # Be carefull, that after saving a new child, you will have
  # to reload() all the models that is owned by the tree.
  # The update of the tree has a big cost.
  def build_child **args
    build_child_indices root_id: self.id, **args
  end
  def save_child **args
    child = build_child(args)
    child.save
    child
  end
  def save_child! **args
    child = build_child(args)
    child.save!
    child
  end

  ##
  # Define the scope we want make search and lookups.
  def self.default_scope
    Node.where(tree_level: 1)
  end

private

  ##
  # Set the field root_id to self id.
  # This way, the update of the tree while inserting
  # are satisfied.
  def root_to_self
    reload and update!(root_id: self.id)
  end

  ##
  # Check that the indices on creation are good
  def create_indices
    self.left_tree = 1
    self.right_tree = 2
    self.tree_level = 1
  end
end
