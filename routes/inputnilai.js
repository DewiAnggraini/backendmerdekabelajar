const router = require('express').Router()
const nilai = require('../controller/inputnilai')

router.post('/insert', (req, res) => {
    nilai.insertnilai(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
module.exports = router