# Intervals trees in rails

Basic example of intervals trees in rails.
Live Demo there : [shielded-taiga-4796.herokuapp.com](https://shielded-taiga-4796.herokuapp.com).

## Intervals trees ?
Intervals trees are just a representation for n-ary trees. The advantages
of interval trees, are that you don't have any recursive calls during selection of the tree, all the structure is flat !
The downside is that inserting and removing data is very expensive.

Implementation came from these lectures :

- [Gestion d'arbres par représentation intervallaire - French](http://sqlpro.developpez.com/cours/arborescence/)
- [Growing Rails](https://leanpub.com/growing-rails)

## ´AsNode´ and ´AsRoot´ ?
We cut the responsability of our pretty fat model node in some usecase.
This way, we can handle separatly a creation of a root and a creation of a
node for example.
We have put very few models validations as we need to changes indices pretty often. A more complete validation system will came soon.

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

