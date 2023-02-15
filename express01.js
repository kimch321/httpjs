const express = require('express');
const app = express();
// express()
// 새로운 Express application을 만들때 사용한다.
// 매개변수로
//      middleware(응용 프로그램에서 사용할 미들웨어 함수의 배열),
//      settings(application-level settings을 포함하는 오브젝트),
//      parent(a parent application(만약 이 프로그램을 서브 프로그램으로 사용하는 경우))를 받는다.
// Express application의 인스턴스를 반환한다.
const port = process.env.PORT || 3000;
// process
// 현재 node.js의 프로세스에 관한 정보를 제공하는 글로벌 객체이다. 이 객체를 통해 프로세스를 제어하고 상호작용할 수 있다.
// env는 process 객체의 키인데 user environment를 담은 객체를 리턴한다. .PORT는 그 객체의 키이다. 즉 변수 port엔 user environment가 담긴 객체의 PORT의 value가 담겨 있거나,  || 3000에 의해 3000이 담겨 있다.
// process

const html = 'text/html; charset=utf-8';

// 라우팅 설정 : app.메서드(경로, 콜백함수)
app.get('/',(req,res)=>{
    res.type(html);
    res.end('<h1>index 페이지 입니다!!</h1>')
})
app.get('/user',(req,res)=>{
    res.type(html);
    res.end('<h1>user 페이지 입니다!!</h1>')
})

// 라우팅 패스 추가분
app.get('/user/add',(req,res)=>{
    res.type(html);
    res.end('<h1>user 가입 페이지 입니다!!</h1>')
});

app.get('/user/view',(req,res)=>{
    res.type(html);
    res.end('<h1>user 상세정보 페이지 입니다!!</h1>')
});

app.get('/about',(req,res)=>{
    res.type(html);
    res.end('<h1>about 페이지 입니다!!</h1>')
})


// custom 404 routing
// 라우팅 설정 2 : app.use(경로, 콜백함수)
app.use((req,res) => {
    res.type(html);
    res.status(404);
    res.end('<h1>404 - 존재하지 않는 페이지 입니다!!</h1>')
})


app.listen(port,()=>{
    console.log('서버 실행 중... 중지하려면 ctrl+c를 눌러요!')
})