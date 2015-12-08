require'rails_helper'

describe Node do

  it "is invalid with a left_tree > right_tree" do
    node = build(:node, left_tree: 2, right_tree: 1)
    node.valid?
    expect(node.errors[:left_tree]).to(
      include("Can't be bigger than right_tree"))
  end

  it "is invalid with a left_tree == right_tree" do
    node = build(:node, left_tree: 2, right_tree: 2)
    node.valid?
    expect(node.errors[:left_tree]).to(
      include("Can't be equal to right_tree"))
  end
  it "is invalid to try to update left_tree" do
    node = create(:node, left_tree: 1, right_tree: 2)
    node.left_tree = 0
    node.valid?
    expect(node.errors[:left_tree]).to(
      include("can not be updated"))
  end
  it "is valid with a left_tree < right_tree" do
    expect(build(:node, left_tree: 1, right_tree: 2).valid?)
  end

  describe "As Root" do
    it "is created with a label" do
      expect(build(:root).valid?)
    end

    it "have indice correct after creation" do
      root = create(:root)
      expect(root.left_tree).to eq(1)
      expect(root.right_tree).to eq(2)
    end

    it "is invalid without a label" do
      expect(build(:root, label: nil).valid?).to eq(false)
    end

    it "is a leaf on creation" do
      expect(create(:root).leaf?)
    end

    it "can append a node" do
      root = create(:root)
      child1 = root.save_child(label: "Child 2")
      child2 = root.reload.save_child(label: "Child 2")

      root.reload and child1.reload and child2.reload
      expect(root.left_tree).to eq(1)
      expect(child1.left_tree).to eq(2)
      expect(child1.right_tree).to eq(3)
      expect(child2.left_tree).to eq(4)
      expect(child2.right_tree).to eq(5)
      expect(root.right_tree).to eq(6)
    end

    it "can search by label on root scope only" do
      root = create(:root, label: "Root")
      root.save_child!(label: "Root")
      root.reload
      expect(Node::AsRoot.where(label: "Root").count).to eq(1)
    end
  end

  describe "As Node" do
    it "update the root tree indices on creation of nodes" do
      root = create(:root_with_nodes, nodes_count: 5)
      nodes = root.childs
      expect(root.left_tree).to eq(1)
      expect(root.right_tree).to eq(nodes.count * 2 + 2)
    end

    it "update the root tree indices on deletion" do
      root = create(:root_with_nodes, nodes_count: 5)
      childs = root.childs
      expect do
        root.childs.first.destroy
        root.reload
      end.to(
        change{root.right_tree}
          .from(childs.count * 2 + 2)
          .to(childs.count * 2))
    end

    it "can be append as right sister of a node" do
      root = create(:root_with_nodes, nodes_count: 1)
      child = root.childs.first
      sister = child.save_sister(label: "hello")

      sister.reload and child.reload and root.reload

      expect(sister.tree_level).to eq(child.tree_level)
      expect(sister.left_tree).to eq(child.right_tree + 1)
      expect(sister.parent.as_root).to eq(root)
    end

    it "can search by label on node scope only" do
      root = create(:root_with_nodes, nodes_count: 1)
      root.update label: "hello"
      sister = root.childs.first.save_sister!(label: "hello")
      expect(Node::AsNode.where(label: "hello").count).to eq(1)
    end
  end

  describe "As Leaf" do
    it "update the Root tree indices on creation"
    it "update the Root tree indices on deletion"

    it "update the Node tree indices on creation"
    it "update the Node tree indices on deletion"

    it "can be found by label"
  end
end
