const express = require('express');
const path = require('path');
const router = express.Router();

const html = 'text/html; charset=utf-8';

// show index page
router.get('/',(req,res) => {
   // 응답으로 지정한 파일의 내용을 전송함
   // res.sendFile(path.join(__dirname,'../public','index.html'));
   // handlebars 뷰 엔진으로 응답처리
   res.render('index',{title:'index'});
});
// router.get('/',(req,res) => {
//    // 응답으로 지정한 파일의 내용을 전송함
//    res.sendFile(path.join(__dirname,'../public','smile.png'));
// })

module.exports = router; // 이 파일이 모듈로 작동한다는 것을 표시