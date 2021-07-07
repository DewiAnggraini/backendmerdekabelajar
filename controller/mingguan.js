const mingguan = require('../model/mingguan')

exports.insertMingguan = (data) =>
  new Promise((resolve, reject) => {
    mingguan.create(data)
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
    mingguan.find()
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
    mingguan.updateOne({
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
    mingguan.findOne({
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
        massage: 'berhasil menghapus',
      })
    }).catch(() => {
      reject({
        sukses: false,
        massage: 'gagal menghapus data'
      })
    })
  })
