const router = require('express').Router()
const evaluasimingguan = require('../controller/evaluasimingguan')

router.post('/insert', (req, res) => {
  evaluasimingguan.insertevaluasimingguan(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router