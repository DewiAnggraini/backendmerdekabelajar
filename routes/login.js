const router = require('express').Router()
const login = require('../controller/login')

router.post('/register', (req, res) => {
  login.insertUser(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.post('/login', (req, res) => {
  login.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getdata', (req, res) => {
  login.getAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getalldosen', (req, res) => {
  login.getAllDosen()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router