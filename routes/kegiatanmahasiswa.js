const router = require('express').Router()
const kegiatanmahasiswa = require('../controller/kegiatanmahasiswa')

router.post('/insert', (req, res) => {
  kegiatanmahasiswa.insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getdatakegiatan/:username', (req, res) => {
  kegiatanmahasiswa.getKegiatanByDosen(req.params.username)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/konfirmasi/:id', (req, res) => {
  kegiatanmahasiswa.konfirmasiKegiatan(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getdatakegiatanbymhs/:npm', (req, res) => {
  kegiatanmahasiswa.getKegiatanByMahasiswa(req.params.npm)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router