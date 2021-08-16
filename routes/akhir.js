const router = require('express').Router()
const akhir = require('../controller/akhir')
const uploadSetting = require('../uploadConfig')

router.post('/insert', uploadSetting.upload.single('file'), (req, res) => {
  
  const data = JSON.parse(req.body.data)
  data.laporan = req.file.filename
  akhir.insertakhir(data)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getbyid/:username/:npm', (req, res) => {
  akhir.getById(req.params.username, req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router