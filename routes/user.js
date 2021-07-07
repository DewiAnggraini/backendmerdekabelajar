const router = require('express').Router()
const userController = require('../controller/user')

router.post('/insert', (req, res) => {
    userController.insertUser(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    userController.getAllData()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.put('/edit/:npm', (req, res) => {
    userController.editData(req.params.npm, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:npm', (req, res) => {
    userController.getById(req.params.npm)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})
router.delete('/delete/:npm', (req, res) => {
    userController.deletedata(req.params.npm)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router