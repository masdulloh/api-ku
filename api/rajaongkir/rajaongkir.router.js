const router = require("express").Router();
const {cekCost, mootaProfile, pushMoota} = require("./rajaongkir.controller");

router.post("/cost", cekCost);
router.get("/mootaprofile", mootaProfile);
router.post("/pushmoota", pushMoota);

module.exports = router;