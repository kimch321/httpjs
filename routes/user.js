const express = require('express');
const path = require("path");
const router = express.Router();

const html = 'text/html; charset=utf-8';

// show index page
router.get('/',(req,res) => {
    // 응답으로 지정한 파일의 내용을 전송함
    res.sendFile(path.join(__dirname,'../public', 'user.html'));
})

module.exports = router;