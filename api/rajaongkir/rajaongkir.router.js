const router = require("express").Router();
const {cekCost, mootaProfile, mootaBank, pushMoota} = require("./rajaongkir.controller");

router.post("/cost", cekCost);
router.get("/mootaprofile", mootaProfile);
router.post("/pushmoota", pushMoota);
router.get("/mootabank", mootaBank);

module.exports = router;