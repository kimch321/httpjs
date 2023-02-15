const http = require('http');
const {Http2ServerResponse} = require("http2"); // ?.require가 뭐지 * notion
const port = process.env.PORT || 3000; // ?? http://127.0.0.1:3000 의 의미? * process는 모듈이다.
// console.log(process.env.PORT); undefined가 출력된다.
// console.log(port); 3000
// env는 process의 속성인데 user environment를 담은 객체를 리턴한다. .PORT는 그 객체의 키이다. 즉 변수 port엔 user environment가 담긴 객체의 PORT의 value가 담겨 있거나,  || 3000에 의해 3000이 담겨 있다.

// localhost:3000 요청시 처리
const server = http.createServer((req,res) => { // opts, requestListener를 매게변수로 받아 http.Server 객체를 반환한다.
    // 응답헤더 작성 : 응답코드, 응답 데이터 형식 지정
    res.writeHead(200, {'Content-Type':'text/plain'}); // Http2ServerResponse의 인스턴스를 반환한다.
    // 응답메세지 전송
    res.end('Hello, World!!');
});

server.listen(port, ()=>{
    console.log('서버 실행 중... 중지하려면 ctrl+c를 눌러요!')
});