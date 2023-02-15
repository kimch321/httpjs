const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const userRouter = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// index에 대한 route handler 지정
app.use(indexRouter);
app.use(aboutRouter);
app.use(userRouter);

app.listen(port,()=>{
    console.log('서버 실행 중... 중지하려면 ctrl+c를 눌러요!')
})