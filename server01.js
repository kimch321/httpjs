const http = require('http'); // ?.require가 뭐지
const port = process.env.PORT || 3000; // ?? http://127.0.0.1:3000 의 의미?

// localhost:3000 요청시 처리
const server = http.createServer((req,res) => {
    // 응답헤더 작성 : 응답코드, 응답 데이터 형식 지정
    res.writeHead(200, {'Content-Type':'text/plain'});
    // 응답메세지 전송
    res.end('Hello, World!!');
});

server.listen(port, ()=>{
    console.log('서버 실행 중... 중지하려면 ctrl+c를 눌러요!')
});