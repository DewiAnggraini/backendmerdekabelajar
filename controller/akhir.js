const akhir = require('../model/akhir')

exports.insertAkhir = (data) =>
  new Promise((resolve, reject) => {
    akhir.create(data)
      .then(() => {
        resolve({
          sukses: true,
          massage: 'berhasil input data mahasiswa'
        })
      }).catch(() => {
        reject({
          sukses: false,
          massage: 'gagal input data mahasiswa'
        })
      })
  })

exports.getAllData = () =>
  new Promise((resolve, reject) => {
    akhir.find()
      .then(res => {
        resolve({
          sukses: true,
          massage: 'berhasil mnampilkan data',
          data: res
        })
      }).catch(() => {
        reject({
          sukses: false,
          massage: 'gagal menampilkan data',
          data: []
        })
      })
  })

exports.editData = (npm, data) =>
  new Promise((resolve, reject) => {
    akhir.updateOne({
      NPM: npm
    }, data).then(() => {
      resolve({
        sukses: true,
        massage: 'berhasil update data'
      })
    }).catch(() => {
      reject({
        sukses: false,
        massage: 'gagal update data'
      })
    })
  })
exports.getById = (npm) =>
  new Promise((resolve, reject) => {
    akhir.findOne({
      NPM: npm
    }).then((res) => {
      resolve({
        sukses: true,
        massage: 'berhasil menampilkan data',
        data: res
      })
    }).catch(() => {
      reject({
        sukses: false,
        massage: 'gagal menampilkan data',
        data: null
      })
    })
  })

exports.deletedata = (npm) =>
  new Promise((resolve, reject) => {
    mingguan.deleteOne({
      NPM: npm
    }).then(() => {
      resolve({
        sukses: true,
        massage: 'berhasil menghapus data',
      })
    }).catch(() => {
      reject({
        sukses: false,
        massage: 'gagal menghapus data'
      })
    })
  })
