const express = require("express");
const { addRecord, getRecords } = require("./controllers");

const router = express.Router();

router.post("/add_record", addRecord);
router.get("/get_records", getRecords);

module.exports = router;
