# A generic n-ary tree, You can add childs, remove a node and it's child,
# and get some properties such as level, type(node, leaf).
class Node < ActiveRecord::Base
  validates :left_tree,
           readonly: :true,
           on: :update

  validates :right_tree,
           readonly: :true,
           on: :update

  # Validate uniqueness of indices inside a same tree
  validate :numerical_order_of_indices
  validates :label, presence: true

  before_destroy :destroy_subtree

  ##
  # Cast the node to a tree root.
  # Raise an exception if the node is not a root.
  def as_root
    ActiveType.cast(self, Node::AsRoot)
  end

  ##
  # Cast the node to a tree node.
  # Raise an exception if the node is not child of a root.
  def as_node
    ActiveType.cast(self, Node::AsNode)
  end

  ##
  # Find the root of the current root.
  # Return a Node::AsRoot class.
  def root
    Node.find(self.root_id).as_root
  end

  ##
  # If the current node have not any childs
  def leaf?
    return (right_tree - left_tree == 1)
  end

  ##
  # If the current node is in fact the root.
  def root?
    return tree_level == 1
  end

  ##
  # If the current node is not the root, and have some childs.
  def node?
    return(not root?)
  end

  # To iterate over root subtree.
  def childs
    Node::AsNode.where('left_tree > :left_tree
               AND right_tree < :right_tree
               AND root_id = :root_id
               AND tree_level > :tree_level',
               { left_tree: self.left_tree,
                 right_tree: self.right_tree,
                 root_id: self.id,
                 tree_level: self.tree_level })
  end

  ##
  # Return the node and all the subtree.
  def tree
    Node.where('left_tree >= :left_tree
               AND right_tree <= :right_tree
               AND root_id = :root_id',
               { left_tree: self.left_tree,
                 right_tree: self.right_tree,
                 root_id: self.id })
  end

protected
  ##
  # Prepare a new child, with the right
  # - tree_level : the level where the node is inside the tree
  # - left_tree : the left indice for the interval
  # - right_tree : the right indice for the interval
  #
  # When the node is saved, see Node::AsNode#before_save to see
  # the tree re-orgranisation
  def build_child_indices **args
    right_child = Node::AsNode.new args
    right_child.tree_level = self.tree_level + 1
    # Give as left_tree the current right_tree
    right_child.left_tree = self.right_tree
    right_child.right_tree = self.right_tree + 1
    right_child
  end

private
  def numerical_order_of_indices
    return if left_tree.nil? or right_tree.nil?
    if left_tree > right_tree
      errors.add(:left_tree, "Can't be bigger than right_tree")
      errors.add(:right_tree, "Can't be lower than left_tree")
    elsif left_tree == right_tree
      errors.add(:left_tree, "Can't be equal to right_tree")
      errors.add(:right_tree, "Can't be equal to left_tree")
    end
  end

  ##
  # Destroy the subtree of the node (without the node itself)
  # and reorganise the tree.
  def destroy_subtree
    # Delete the subtree if exist
    childs.destroy_all() unless leaf?

    # Update tree to fill the space created by the deletion
    # even we don't have a subtree.
    right_part = Node.where('root_id = :root_id
                             AND right_tree >= :left_tree ',
                            { root_id: self.root_id,
                              left_tree: self.left_tree })
    left_part = Node.where('root_id = :root_id
                            AND left_tree > :left_tree',
                           { root_id: self.root_id,
                             left_tree: self.left_tree })
    offset = self.right_tree - self.left_tree + 1
    right_part.update_all(['right_tree = right_tree - :offset',
                           { offset: offset } ])
    left_part.update_all(['left_tree = left_tree - :offset',
                          { offset: offset } ])

  end
end
