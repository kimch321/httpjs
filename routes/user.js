const express = require('express');
const path = require("path");
const router = express.Router();

const html = 'text/html; charset=utf-8';

// show index page
router.get('/',(req,res) => {
    // 응답으로 지정한 파일의 내용을 전송함
    res.render('user',{title:'user'});
})

router.get('/add', (req, res) => {
    res.type(html);
    res.end('<h1>user 가입 페이지 입니다!!</h1>');
});

router.get('/view', (req, res) => {
    res.type(html);
    res.end('<h1>user 상세정보 페이지 입니다!!</h1>');
});

module.exports = router;