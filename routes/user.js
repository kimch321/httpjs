const express = require('express');
const router = express.Router();

const html = 'text/html; charset=utf-8';

// show index page
router.get('/user',(req,res) => {
    res.type(html);
    res.end('<h1>user 페이지 입니다!!</h1>')
})

module.exports = router;