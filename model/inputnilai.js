const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nilaiSchema = new Schema({
    NPM: {
        type: String
    },
    nama_kegiatan: {
        type: String
    },
    Nilai_skill: { //free form= laporan dikonversi ke mata kuliah , blended form (structure form)= laporan dikoversi menjadi skills  
        type: String
    },
    Nilai_matakuliah: {
        type: String
    },
    image: [
        {
          filename: String
        }
      ]
})
module.exports = mongoose.model('nilai', nilaiSchema)