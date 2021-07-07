const akhir = require('../model/akhir')
const objekid = require('mongoose').Types.ObjectId

exports.insertakhir = (data) =>
    new Promise((resolve, reject) => {
      try{
        akhir.findOne({NPM: data.NPM})
        .then((result) =>{
          if (result){
            resolve({
              sukses: false,
              massage: 'anda sudah input laporan akhir'
            })
          } else {
            akhir.create(data)
              .then(() => {
                resolve({
                  sukses: true,
                  massage: 'berhasil input laporan akhir'
                  })
              }).catch((e) => {
                reject({
                  sukses: false,
                  massage: 'gagal input laporan akhir'
                })
            })
          }
        })
      }catch (e){
        console.log(e)
      }
    })
    exports.getById = (id) =>
    new Promise((resolve, reject) => {
      akhir.aggregate([
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
            'logbook.NIDN_dosen': id
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
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil mnampilkan data laporan akhir',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data laporan akhir',
            data: []
          })
        })
      })