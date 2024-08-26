const express = require("express");
const { addRecord } = require("./controllers");

const router = express.Router();

router.post("/add_record", addRecord);

module.exports = router;
