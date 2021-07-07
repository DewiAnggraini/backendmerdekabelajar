const router = require('express').Router()
const nilai = require('../controller/inputnilai')
const uploadSetting = require('../uploadConfig')

router.post('/insert', uploadSetting.upload.array('image'), (req, res) => {

    const images = req.files.map(r => {
      return {
        filename: r.filename
      }
    })
    const data = JSON.parse(req.body.data)
    data.image = images
  
    nilai.insertnilai(data)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  })
module.exports = router