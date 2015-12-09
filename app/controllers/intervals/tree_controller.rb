class Intervals::TreeController < ApplicationController

  def index
    @tree = tree_scope.last
    build_tree unless @tree
  end

  def destroy
    load_tree
    @tree.destroy
    redirect_to root_path
  end

  def create
    build_tree
    saved = if params[:as_root]
      @tree.as_root.save
    else
      @tree.as_node.save
    end
    if saved
      redirect_to root_path
    end
  end
private

  def load_trees
    @trees ||= tree_scope
  end

  def load_tree
    @tree ||= node_scope.find(params.require(:id))
    cast_activetype
  end

  def cast_activetype
    @tree = if @tree.root?
      @tree.as_root
    else
      @tree.as_node
    end
  end

  def build_tree
    @tree ||= node_scope.build
    @tree.attributes = tree_params
    cast_activetype
  end

  def save_tree
    if @tree.save
      redirect_to @tree
    end
  end

  def tree_params
    tree_params = params[:node]
    tree_params ? tree_params.permit(:label,
                                     :left_tree,
                                     :right_tree,
                                     :tree_level,
                                     :root_id) : {}
  end

  def node_scope
    Node.all
  end

  def tree_scope
    Node::AsRoot.all
  end
end
