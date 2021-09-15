const express = require('express')
const api = express.Router()
const fxn = require('../controllers/apis')

api.get('/all-items', fxn.getAllItems)
api.post('/register', fxn.register)
api.post('/login', fxn.login)
api.get('/:msg', fxn.showMsg)

module.exports = api