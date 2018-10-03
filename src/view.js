const { map, pick, bind, compose }  = require('ramda')

const one = pick(['id', 'role', 'name']);
const many = map(one);

module.exports = {
  one,
  many,
}
