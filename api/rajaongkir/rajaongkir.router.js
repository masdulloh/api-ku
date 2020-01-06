const router = require("express").Router();
const {cekCost, mootaProfile} = require("./rajaongkir.controller");

router.post("/cost", cekCost);
router.get("/mootaprofile", mootaProfile);

module.exports = router;