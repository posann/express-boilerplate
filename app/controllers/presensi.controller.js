const db = require("../models");
const Presensi = db.presensis;

exports.create = (req, res) => {
  const presensi = {
    nama: req.body.nama,
    status: req.body.status,
  };

  Presensi.create(presensi)
    .then((data) => {
      res.json({
        message: "Data presensi berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};
