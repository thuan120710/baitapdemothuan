const express = require('express')
const router = express.Router();
const dataFile = require("../utils/data") 

router.get('/', (req, res) => {
    let students = dataFile.dataStudent;
    res.send(students)
})



module.exports = router