const router = require('express').Router()
const kegiatanadmin = require('../controller/kegiatanadmin')

router.post('/insert', (req, res) => {
  kegiatanadmin.insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
  kegiatanadmin.getAll()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router