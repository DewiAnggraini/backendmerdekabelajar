const mingguan = require('../model/mingguan')
const mongoose = require('mongoose')
const objekid = mongoose.Types.ObjectId

  exports.insertminggguan = (data) =>
    new Promise((resolve, reject) => {
      mingguan.create(data)
        .then(() => {
          resolve({
            sukses: true,
            massage: 'berhasil input laporan mingguan'
            })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal input laporan mingguan'
          })
       })
    })

    exports.getAllData = (id_logbook) =>
    new Promise((resolve, reject) => {
      mingguan.find({
        id_logbook: id_logbook
      })
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil menampilkan data laporan mingguan',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data laporan mingguan',
            data: []
          })
        })
      })

      exports.getById = (id) =>
      new Promise((resolve, reject) => {
        mingguan.find({
          _id: objekid(id)
        })
          .then(res => {
            resolve({
              sukses: true,
              massage: 'berhasil mnampilkan data laporan mingguan',
              data: res
            })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal menampilkan data laporan mingguan',
              data: []
            })
          })
        })
      exports.deletedata = (data) =>
      new Promise((resolve, reject) => {
        mingguan.deleteOne(data)
          .then(() => {
            resolve({
              sukses: true,
              massage: 'berhasil menghapus laporan mingguan'
              })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal menghapus laporan mingguan'
            })
         })
      })

exports.getByDosen = (username) =>
  new Promise((resolve, reject) => {
    mingguan.aggregate([
      {
        $lookup: {
          from: 'logbooks',
          localField: 'id_logbook',
          foreignField: '_id',
          as: 'logbook'
        }
      },
      { $unwind: '$logbook'},
      {
        $match: {
          'logbook.NIDN_dosen': username
        }
      },
      {
        $lookup: {
          from: 'logins',
          localField: 'NPM',
          foreignField: 'username',
          as: 'mhs'
        }
      },
      { $unwind: '$mhs'}
    ])
      .then((res) => {
        resolve({
          sukses: true,
          massage: 'berhasil Menampilkan laporan mingguan',
          data: res
        })
      }).catch(() => {
        reject({
          sukses: false,
          massage: 'gagal Menampilkan laporan mingguan',
          data: []
        })
      })
  })

exports.evaluasi = (id, data) =>
    new Promise((resolve, reject) => {
      mingguan.updateOne({
        _id: objekid(id)
      },data)
        .then(() => {
          resolve({
            sukses: true,
            massage: 'berhasil mengevaluasi laporan mingguan'
            })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal mengevaluasi laporan mingguan'
          })
        })
    })
