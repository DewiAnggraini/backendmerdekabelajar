const router = require('express').Router()
const mingguan = require('../controller/mingguan')
const uploadSetting = require('../uploadConfig')

router.post('/insert', uploadSetting.upload.array('image'), (req, res) => {

  const images = req.files.map(r => {
    return {
      filename: r.filename
    }
  })
  const data = JSON.parse(req.body.data)
  data.image = images

  mingguan.insertminggguan(data)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getall/:username', (req, res) => {
  mingguan.getAllData(req.params._user)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/edit/:_id', (req, res) => {
  mingguan.editData(req.params._id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:_id', (req, res) => {
  mingguan.getById(req.params._id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete('/delete/:_id', (req, res) => {
  mingguan.deletedata(req.params._id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbydosen/:username', (req, res) => {
  mingguan.getByDosen(req.params.username)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/evaluasi/:_id', (req, res) => {
  mingguan.evaluasi(req.params._id, req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router