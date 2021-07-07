const mongoose = require('mongoose')
const Schema = mongoose.Schema

const evaluasimingguanSchema = new Schema({
  NPM: {
    type: String
  },
  Evaluasi: {
    type: String
  },
})
module.exports = mongoose.model('evaluasimingguan', evaluasimingguanSchema)