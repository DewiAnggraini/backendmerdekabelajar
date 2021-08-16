const router = require('express').Router()
const nilai = require('../controller/inputnilai')
const uploadSetting = require('../uploadConfig')

router.post('/insert', uploadSetting.upload.single('file'), (req, res) => {

    const data = JSON.parse(req.body.data)
    data.File =req.file.filename
    nilai.insertnilai(data)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })

router.get('/getbyid/:_id', (req, res) => {
  nilai.getById(req.params._id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router