const mongoose = require('mongoose')
const Schema = mongoose.Schema

const akhirSchema = new Schema({
  NPM: {
    type: String
  },
  Nama: {
    type: String
  },
  laporan_video: {
    type: String
  },
  laporan_file: {
    type: String
  },
})
module.exports = mongoose.model('akhir', akhirSchema)