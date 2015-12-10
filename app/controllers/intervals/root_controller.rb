class Intervals::RootController < ApplicationController
  ##
  # Show the tree creation form and the trees already created.
  def index
    build_tree and load_trees
  end

  ##
  # Show the wanted tree.
  def show
    load_tree
  end

  ##
  # destroy the tree, and go back to the root page.
  def destroy
    load_tree
    @tree.destroy
    redirect_to root_path, success: "Tree deleted"
  end

  ##
  # Create a new tree and visualise it.
  # Display errors if data for creation are not valid.
  def create
    unless build_tree and save_tree
      load_trees and render :index
    end
  end

private

  ##
  # Node all the trees disponible.
  def load_trees
    @trees ||= tree_scope
  end

  ##
  # Load the tree wanted by the parameter ´id´.
  # Rais exception if parameter is omited, or root node not found.
  def load_tree
    @tree ||= tree_scope.find(params.require(:id))
  end

  ##
  # Build the tere from the parameter given.
  # If no parameter given, give a new tree.
  def build_tree
    @tree ||= tree_scope.build
    @tree.attributes = tree_params
  end

  ##
  # Save the tree, and redirect to the visualisation of the tree.
  def save_tree
    @tree.save and redirect_to intervals_root_path(@tree.id)
  end

  ##
  # Parameter permitted on manipulating a tree.
  def tree_params
    tree_params = params[:node]
    tree_params ? tree_params.permit(:label) : {}
  end

  ##
  # The scope the controller is working on for tree.
  def tree_scope
    Node::AsRoot.all
  end
end
