const express = require('express');
const router = express.Router();

const html = 'text/html; charset=utf-8';


router.get('/about',(req,res) => {
    res.type(html);
    res.end('<h1>about 페이지 입니다!!</h1>')
})

module.exports = router;