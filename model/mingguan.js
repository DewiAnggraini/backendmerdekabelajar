const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mingguanSchema = new Schema({
  NPM: {
    type: String
  },
  Nama: {
    type: String
  },
  Jenis_kegiatan: {
    type: String
  },
  Deskripsi: {
    type: String
  },
})
module.exports = mongoose.model('mingguan', mingguanSchema)