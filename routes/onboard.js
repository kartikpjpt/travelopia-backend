const express = require("express");
const router = express.Router();

const { onboard, onboardGet } = require("../controller/onboard");

router.post("/", onboard);
router.get("/", onboardGet);

module.exports = router;
