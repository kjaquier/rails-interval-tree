class Node::AsNode < ActiveType::Record[Node]
  validates :left_tree, presence: true
  validates :right_tree, presence: true

  before_create :make_space_in_tree

  # To iterate over node's childs.
  scope :childs, -> { where('left_tree > :left_tree
                            AND right_tree < :right_tree
                            AND root_id = :root_id',
                            { left_tree: self.left_tree,
                              right_tree: self.right_tree,
                              root_id: self.root_id }) }

  # Get a parent at the given level.
  # By default, give the direct parent.
  # Return nil if not found.
  def parent(tree_level = nil)
    if tree_level.nil?
      tree_level = self.tree_level - 1
    end
    Node.where('tree_level = :tree_level
                AND left_tree < :left_tree
                AND right_tree > :right_tree',
                { tree_level: tree_level,
                  left_tree: self.left_tree,
                  right_tree: self.right_tree }).first
  end

  ##
  # Append a sister from the parent node. So, the sister
  # and this node will share the same parent.
  # Will be append on the right of the parent subtree.
  def build_sister **args
    parent = parent()
    if parent.root?
      parent.as_root.build_child args
    else
      parent.as_node.build_child args
    end
  end
  def save_sister **args
    child = build_sister(args)
    child.save
    child
  end
  def save_sister! **args
    child = build_sister(args)
    child.save!
    child
  end

  ##
  # Build a node child for the current node.
  #
  # Be carefull, if you save a new child, you will need to
  # reload models that are involved on the tree.
  # Insertion make changes over the whole tree (potentially)
  def build_child **args
    build_child_indices root_id: self.root_id, **args
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
  # When searching in node, we exclude roots from results.
  def self.default_scope
    Node.where.not(tree_level: 1)
  end

private

  ##
  # Update all tree to let some place to the new node.
  # Manage an insertion right side.
  def make_space_in_tree
    # Get the parent that we want to insert
    right_update = Node.where('root_id = :root_id
                               AND right_tree >= :right_tree ',
                              { root_id: root_id,
                                right_tree: left_tree })
    right_update.update_all 'right_tree = right_tree + 2'

    left_update = Node.where('
      root_id = :root_id
      AND left_tree >= :right_tree ',
      { root_id: root_id,
        right_tree: left_tree })
    left_update.update_all 'left_tree = left_tree + 2'
  end
end
