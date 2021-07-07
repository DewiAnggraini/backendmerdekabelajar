const router = require('express').Router()
const logbook = require('../controller/logbook')

router.post('/insert', (req, res) => {
    logbook.insertlogbook(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall/:nidn', (req, res) => {
    logbook.getAllData(req.params.nidn)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
router.put('/edit/:_id', (req, res) => {
    logbook.editData(req.params._id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:_id', (req, res) => {
    logbook.getById(req.params._id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.delete('/delete/:_id', (req, res) => {
    logbook.deletedata(req.params._id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
module.exports = router