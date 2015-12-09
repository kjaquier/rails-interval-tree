class Intervals::TreeController < ApplicationController

  def index
    build_tree and load_trees
  end

  def show
    load_tree
  end

  def destroy
    load_node
    @node.destroy
    if @node.root?
      redirect_to root_path, success: "Tree deleted"
    else
      redirect_to intervals_tree_path(id: @node.root_id), success: "Node deleted"
    end
  end

  def create
    if params[:as_root]
      unless build_tree and save_tree
        load_trees and render :index
      end
    else
      unless build_node and save_node
        # FIXME create a second controller,
        # to sepate routes as_root and as_node.
      end
    end
  end

private

  def load_trees
    @trees ||= tree_scope
  end

  def load_tree
    @tree ||= tree_scope.find(params.require(:id))
  end

  def build_tree
    @tree ||= tree_scope.build
    @tree.attributes = tree_params
  end

  def save_tree
    @tree.save and redirect_to intervals_tree_path(@tree.id)
  end

  def tree_params
    tree_params = params[:node]
    tree_params ? tree_params.permit(:label) : {}
  end

  def tree_scope
    Node::AsRoot.all
  end

  def node_params
    node_params = params[:node]
    node_params ? node_params.permit(:label,
                                     :left_tree,
                                     :right_tree,
                                     :tree_level,
                                     :root_id) : {}
  end

  def node_scope
    Node.all
  end

  def load_node
    @node ||= node_scope.find(params.require(:id))
  end

  def build_node
    @node ||= node_scope.build.as_node
    @node.attributes = node_params
  end

  def save_node
    @node.save and redirect_to intervals_tree_path(@node.root_id)
  end
end
