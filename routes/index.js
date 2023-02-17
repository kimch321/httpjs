const express = require('express');
const path = require('path');
const router = express.Router();
const SungJuk = require('../models/SungJuk')
const oracledb = require('../models/Oracle')

oracledb.initConn();

const html = 'text/html; charset=utf-8';

// show index page
router.get('/',(req,res) => {
   res.render('index',{title:'index'});
});

router.get('/sungjuk',(req,res) => {
   res.render('sungjuk',{title:'성적처리'});
});

router.get('/showsungjuk',async (req,res) => {
    let sjs = new SungJuk().select()
        .then(async result => {return await result});
    console.log(await sjs);

    res.render('showsungjuk',{title:'성적전체보기',sjs: await sjs});
});

router.get('/viewsungjuk',async (req,res) => {
    // console.log(req.query.sjno)
    let sjno = req.query.sjno; // querysting의 값. form으로 넘긴경우 form으로 받으면 된다. * ?...의 값
    let sjs = new SungJuk().selectOne(sjno)
        .then(async result => {return await result});
    // console.log(await sjs);

    res.render('viewsungjuk',{title:'성적상세보기',sjs: await sjs});
});

router.post('/sungjuk',(req,res,next) => {
      let {name, kor, eng, mat} = req.body;

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
      new SungJuk(name, kor, eng, mat, tot, avg, grd).insert()


   res.redirect(304,'/');
});

module.exports = router;