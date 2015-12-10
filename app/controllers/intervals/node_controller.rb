class Intervals::NodeController < ApplicationController

  def destroy
    load_node
    @node.destroy
    redirect_to intervals_root_path(id: @node.root_id),
                success: "Node deleted"
  end

  def create
    unless build_node and save_node
      # TODO add some logic to render error on created node.
    end
  end

private

  def node_params
    node_params = params[:node]
    node_params ? node_params.permit(:label,
                                     :left_tree,
                                     :right_tree,
                                     :tree_level,
                                     :root_id) : {}
  end

  def node_scope
    Node::AsNode.all
  end

  def load_node
    @node ||= node_scope.find(params.require(:id))
  end

  def build_node
    @node ||= node_scope.build.as_node
    @node.attributes = node_params
  end

  def save_node
    @node.save and redirect_to intervals_root_path(@node.root_id)
  end
end
