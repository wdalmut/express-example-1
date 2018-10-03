const view = require('./view')
const { repeat } = require('ramda')

module.exports = {
  one: (req, res) => {
    res.json(view.one(req.user))
  },
  two: (req, res) => {
    let users = repeat({id: 1, name: 'walter', role: 'ROLE_USER', soldi: 800}, 5)

    return res.json(view.many(users))
  },
  auth: (req, res, next) => {
    // autenticazione
    req.user = {
      id: 1,
      role: 'SUPER_ADMIN',
      name: 'Walter',
      soldi: 800,
    }

    return next();
  },
}
