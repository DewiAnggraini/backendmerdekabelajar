const router = require('express').Router()
const akhir = require('../controller/akhir')
const uploadSetting = require('../uploadConfig')

// router.post('/insert', (req, res) => {
router.post('/insert', uploadSetting.upload.single('file'), (req, res) => {
  
  const data = JSON.parse(req.body.data)
  data.laporan = req.file.filename
  // console.log(data)
  akhir.insertakhir(data)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


router.get('/getbyid/:_id', (req, res) => {
  akhir.getById(req.params._id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router