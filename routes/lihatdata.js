const router = require('express').Router()
const lihatdata = require('../controller/lihatdata')

router.post('/insert', (req, res) => {
  lihatdata.inserlihatdata(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
  lihatdata.getAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/edit/:npm', (req, res) => {
  lihatdata.editData(req.params.npm, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:npm', (req, res) => {
  lihatdata.getById(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete('/delete/:npm', (req, res) => {
  lihatdata.deletedata(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router