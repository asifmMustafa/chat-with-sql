const express = require("express");
const { addRecord, getRecords, assistant } = require("./controllers");

const router = express.Router();

router.post("/add_record", addRecord);
router.get("/get_records", getRecords);
router.get("/assistant", assistant);

module.exports = router;
