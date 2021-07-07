const router = require('express').Router()
const akhir = require('../controller/akhir')

router.post('/insert', (req, res) => {
  akhir.insertAkhir(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
  akhir.getAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/edit/:npm', (req, res) => {
  akhir.editData(req.params.npm, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:npm', (req, res) => {
  akhir.getById(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete('/delete/:npm', (req, res) => {
  akhir.deletedata(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router