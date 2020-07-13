const express = require("express");
const router = express.Router();
const jwt = require("../auth/jwt");

/* GET home page. */
router.post("/login", async function (req, res, next) {
  try {
    let token = await jwt.generateToken({ id: "agteoiji324lkm" });
    res.json({ token: token });
  } catch (e) {
    res.json({ err: e });
  }
});

module.exports = router;
