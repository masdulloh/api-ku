const router = require("express").Router();
const {cekCost, mootaProfile, mootaBank,mootaMutasi, pushMoota} = require("./rajaongkir.controller");

router.post("/cost", cekCost);
router.get("/mootaprofile", mootaProfile);
router.post("/pushmoota", pushMoota);
router.get("/mootabank", mootaBank);
router.get("/mootamutasi", mootaMutasi);

module.exports = router;