class Intervals::RootController < ApplicationController

  def index
    build_tree and load_trees
  end

  def show
    load_tree
  end

  def destroy
    load_tree
    @tree.destroy
    redirect_to root_path, success: "Tree deleted"
  end

  def create
    unless build_tree and save_tree
      load_trees and render :index
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
    @tree.save and redirect_to intervals_root_path(@tree.id)
  end

  def tree_params
    tree_params = params[:node]
    tree_params ? tree_params.permit(:label) : {}
  end

  def tree_scope
    Node::AsRoot.all
  end
end
