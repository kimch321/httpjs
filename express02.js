const express = require('express');
const path = require('path');
const logger = require('morgan'); // 로그 출력기

// 라우팅 외부 작성
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// 라우팅을 거치지 않고 직접 호출해서 응답
app.use(express.static(path.join(__dirname,'static')))

// 로그 설정
app.use(logger('dev'));

// index에 대한 route handler 지정
app.use('/',indexRouter);
app.use('/about',aboutRouter);
app.use('/user',userRouter);
app.use((req,res)=> {
    res.status(404);
    res.sendFile(path.join(__dirname,'public','404.html'))
})

app.use((req,res)=> {
    res.status(500);
    res.sendFile(path.join(__dirname,'public','500.html'))
})

app.listen(port,()=>{
    console.log('서버 실행 중... 중지하려면 ctrl+c를 눌러요!')
})