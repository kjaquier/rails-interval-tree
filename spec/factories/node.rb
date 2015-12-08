FactoryGirl.define do
  factory :node do

    label { Faker::Lorem.word }

    factory :root, :class => Node::AsRoot do

      factory :root_with_nodes do
        ignore do
          nodes_count 3
        end

        after(:create) do |root, evaluator|
          evaluator.nodes_count.times do
            child = root.build_child label: Faker::Lorem.word
            child.save and root.reload
          end
        end
      end


    end
  end
end
