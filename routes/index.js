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
   //
   const mariadb = require('mariadb');
   const dbconfig = require('../dbconfig2.js');

   async function makejumsu () {
      let {name, kor, eng, mat} = req.body;
      // console.log(name, kor, eng, mat);
      let tot = Number(kor)+Number(eng)+Number(mat);
      let avg = (Number(kor)+Number(eng)+Number(mat))/3;
      let grd;
      switch (Math.floor(avg/10)) {
         case 10:
         case 9:
            grd = '수'
            break;
         case 8:
            grd = '우'
            break
         case 7:
            grd = '미'
            break;
         case 6:
            grd ='양'
            break;
         default:
            grd = '가'
            break;
      }
      let param = [name, kor, eng, mat, tot, avg, grd];
      return param;
   }
   async function insertDb (param) {
      let conn;
      let sql= 'insert into sungjuk(학생이름,국어점수,영어점수,수학점수,총점,평균,학점) values(?,?,?,?,?,?,?)'
      try{
         let conn= await mariadb.createConnection(dbconfig);
         console.log('마리아 db 접속 성공')

         let result = await conn.execute(sql,param);
         await conn.commit();
         console.log(result);

      }catch(e){
         console.log(e)
      }finally {
         if (conn) {
            try {
               await conn.close();
               console.log('마리아 db 접속 해제 성공')
            } catch(err) {
               console.log(err)
            }
         }
      }
   }
   function main () {
      makejumsu()
          .then(insertDb)
   }
   main();

   res.redirect(304,'/');
});

// router.get('/',(req,res) => {
//    // 응답으로 지정한 파일의 내용을 전송함
//    res.sendFile(path.join(__dirname,'../public','smile.png'));
// })

module.exports = router; // 이 파일이 모듈로 작동한다는 것을 표시