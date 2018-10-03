const express = require('express')
const app = express()

const fn = require('./fn');
const view = require('./view');

app.get('/', fn.auth, fn.one)
app.get('/list', fn.auth, fn.two)

app.listen(process.env.NODE_PORT || 3000, () => console.log(`Example app listening`))
