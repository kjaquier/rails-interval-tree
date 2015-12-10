# Intervals trees in rails

Basic example of intervals trees in rails.
Live Demo there : [shielded-taiga-4796.herokuapp.com](https://shielded-taiga-4796.herokuapp.com).

## Intervals trees ?
Intervals trees are only another representation for n-ary trees.
An interval tree use two indexes for each node, the left indice, and right one. These two indices represent an interval that will change in order to accept children.

### Examples

![Schema for interval representation example](./doc/schema-explaination.jpg)

The advantages of interval trees, are that you don't have any recursive calls during selection of the tree, all the structure is flat !

The downside is that inserting and removing data is very expensive, as you need – in worst case – to update all the indices of the tree.

Here some example of using the tree, in plain SQL :

__Count number of children of the example tree__
```sql
    SELECT
        right / 2 - 1 AS count_children
    FROM nodes
    WHERE
        left = 1
    LIMIT 1
```

__Select all the subtree of the `espirito santo` node__
```sql
    SELECT
        *
    FROM nodes
    WHERE
        left > 2
        AND right < 7
```

__Select all the leaves of the tree__
```sql
    SELECT
        *
    FROM nodes
    WHERE
        right - left == 1
```


## Application using this tree
We did a example that use this tree. The goal of the app is just to represent
the tree you are building.

To understand better this application implementation, you can read :

- [Gestion d'arbres par représentation intervallaire - French](http://sqlpro.developpez.com/cours/arborescence/)
- [Growing Rails](https://leanpub.com/growing-rails)


### Cutting fat models with `AsNode` and `AsRoot`
We cut the responsability of our pretty fat model `Node` in some different usecases (kind of "views" of our model).
This way, we can handle separatly our `Node` model view as a root node or view
as node (child of a root).

For example, we can select all the direct node of a given root this way :
```rails
Node::AsNode.where(root_id: 1, level: 2)
# note that this query will give back only Node::AsNode instances,
# no need casting !
```

If we want to select all the available root node, we use :
```rails
Node::AsRoot.all
```

These two models `Node::AsNode` and `Node::AsRoot` use the same table in Database, but with different scope and callbacks.

To be able to do almost no casting in our example, we create two controller `Interval::RootController` and `Interval::NodeController`.
This way we can painless manage these two representations of our model `Node` without any casting.

To learn more how to use `ActiveType`, please refer to the [Active Type Gem's docs](https://github.com/makandra/active_type)


## Help Us !
Please feel free to help us, by adding feature to this data-structure.
The goal is to provide a model easy to understand, and good-tested to allow an easier integration. If you feel good to help us a bit, here the roadmap :

- Validate that there is no overlapping on insertion
- Add some helpers
    - Count leaves
    - Count sisters
- On building child, choose if we want to do it right-side or left-side
    - Create sorted tree, to insert right/left relatively to a key.
- Cut/paste a subtree to another place in the tree in just 3 udpates

## FAQ
### Why not a gem ?
There is no good reason to not make a gem. We just want to test it more,
and add some others fonctionalities before turning this a gem.
As it's always quiet a big job to maintain a gem, we make a first try in showing how this data-structure can be implemented.

### Can I use this structure everywhere ?
No, this representation is very efficient for data you want barely insert and select very often.

### How to run it
1. Clone the repository
2. Be sure to have a local postgre database installed
3. Check the database.yml for your connection details
4. Run ´bundle install´ to install all the gems we are using.
5. Run ´rspec´ to see if our tests passes
6. Run ´rails s´ and enjoy the demo on your localhost.

... Or go to our [live demo on heroku](https://shielded-taiga-4796.herokuapp.com/)

