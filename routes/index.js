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

router.get('/sungjuk',(req,res) => {
   res.render('sungjuk',{title:'성적처리'});
});

router.post('/sungjuk',(req,res,next) => {
   // 폼으로 전송된 데이터들은 req.body, req.body.폼이름 등으로 확인 가능
   // console.log(req.body,typeof(req.body));
   // console.log(req.body.name,req.body.kor,req.body.eng,req.body.mat);
   let {name, kor, eng, mat} = req.body;
   // console.log(name, kor, eng, mat);

   let [tot, avg, grd] = [Number(kor)+Number(eng)+Number(mat), (Number(kor)+Number(eng)+Number(mat))/3, '가']
   console.log(tot, avg, grd)

   res.redirect(304,'/');
});

// router.get('/',(req,res) => {
//    // 응답으로 지정한 파일의 내용을 전송함
//    res.sendFile(path.join(__dirname,'../public','smile.png'));
// })

module.exports = router; // 이 파일이 모듈로 작동한다는 것을 표시