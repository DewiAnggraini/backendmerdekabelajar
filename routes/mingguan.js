const router = require('express').Router()
const mingguan = require('../controller/mingguan')

router.post('/insert', (req, res) => {
  mingguan.insertMingguan(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
  mingguan.getAllData()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/edit/:npm', (req, res) => {
  mingguan.editData(req.params.npm, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:npm', (req, res) => {
  mingguan.getById(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete('/delete/:npm', (req, res) => {
  mingguan.deletedata(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router