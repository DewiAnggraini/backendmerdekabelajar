const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nilaiSchema = new Schema({
    NPM: {
        type: String
    },
    Nama_mahasisawa: {
        type: String
    },
    jenis_nilai: { //free form= laporan dikonversi ke mata kuliah , blended form (structure form)= laporan dikoversi menjadi skills  
        type: String
    },
    N: {
        type: String
    }
})
module.exports = mongoose.model('nilai', nilaiSchema)