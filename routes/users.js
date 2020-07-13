var express = require("express");
var router = express.Router();
const authMiddleware = require("../middleware/auth");

/* GET users listing. */
router.post("/", authMiddleware, function (req, res, next) {
  console.log("req.jwtTokenData", req.jwtTokenData);
  res.json({ data: "you can access to users" });
});

module.exports = router;
