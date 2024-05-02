const presensiController = require("../controllers/presensi.controller");
const router = require("express").Router();

router.post("/", presensiController.create);

module.exports = router;
