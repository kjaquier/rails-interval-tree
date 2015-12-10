class Intervals::NodeController < ApplicationController

  ##
  # Destroy the node and redirect to the tree visualisation
  def destroy
    load_node
    @node.destroy
    redirect_to intervals_root_path(id: @node.root_id),
                success: "Node deleted"
  end


  ##
  # Create a new node inside the tree.
  def create
    unless build_node and save_node
      # TODO add some logic to render error on new tree child we wanted
      # to create.
    end
  end

private

  ##
  # Get the parameter for the node.
  # If the parameters is empty or not exists, return empty array.
  def node_params
    node_params = params[:node]
    node_params ? node_params.permit(:label,
                                     :left_tree,
                                     :right_tree,
                                     :tree_level,
                                     :root_id) : {}
  end

  ##
  # Give the node's scope the controller can working on.
  def node_scope
    Node::AsNode.all
  end

  ##
  # Load a node by the id given in parameter.
  # Raise exception if the id parameter is not given.
  def load_node
    @node ||= node_scope.find(params.require(:id))
  end

  ##
  # Build a node from param, or give a new node if no parameter
  # is given.
  def build_node
    @node ||= node_scope.build.as_node
    @node.attributes = node_params
  end

  ##
  # Save the node and redirect to the tree visualisation.
  def save_node
    @node.save and redirect_to intervals_root_path(@node.root_id)
  end
end
