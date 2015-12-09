# Intervals trees in rails

Basic example of intervals trees in rails.

## Intervals trees ?
Intervals trees are just a representation for n-ary trees. The advantages
of interval trees, are that you don't have any recursive calls during selection of the tree, everything is flat !
The downside is that inserting and removing data is painfull and expensive.

The implementation came from these lectures :

- [Gestion d'arbres par représentation intervallaire - French](http://sqlpro.developpez.com/cours/arborescence/)
- [Growing Rails](https://leanpub.com/growing-rails)

## ´AsNode´ and ´AsRoot´ ?
We cut the responsability of our pretty fat model node in some usecase.
This way, we can handle separatly a creation of a root and a creation of a
node for example.
We have put very few validations as we need to changes indices pretty often.
This will be changed as the example grow.

## Help Us !
Please feel free to help us, by adding feature to this data-structure.
The goal is to provide a model easy to understand, and good-tested to allow an easier integration. If you feel good to help us a bit, here the roadmap :

- Validate that there is no overlapping on insertion
- Add some helpers
    - Count leaves
    - Count sisters
- On building child, choose if we want to do it right-side or left-side
    - Create sorted tree, to insert right/left relatively to a key.
- Cut/paste a subtree to another place in the tree in some 3 udpates

## FAQ
### Why not a gem ?
There is no good reason to not make a gem. We just want to test it more,
and add some others fonctionalities before turning this a gem.
As it's always quiet a big job to maintain a gem, we make a first try in showing how this data-structure can be efficient.

### Can I use this structure everywhere ?
No, this representation is very efficient for data you want to insert rarely, and select very often.

### How to run it
1. Clone the repository
2. Be sure to have a local postgre database installed
3. Check the database.yml for your connection details
4. Run ´bundle install´ to install all the gems we are using.
5. Run ´rspec´ to see if all our tests pass
6. Run ´rails s´ and enjoy the demo on your localhost.

