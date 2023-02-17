const oracledb = require('../models/Oracle')

class SungJuk {
    // 생성자 정의 - 변수 초기화
    // 즉, 매개변수로 전달된 값을 클래스 멤버변수에 대입함
    constructor(name,kor,eng,mat,tot,avg,grd) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
        this.tot = tot;
        this.avg = avg;
        this.grd = grd;
    }

    // 성적 저장
    async insert() {
        let conn;
        let sql= 'insert into sungjuk2(등록순서,학생이름,국어점수,영어점수,수학점수,총점,평균,학점) values(등록순서.nextval,:1,:2,:3,:4,:5,:6,:7)'
        let param = [this.name, this.kor, this.eng, this.mat, this.tot, this.avg, this.grd];
        try{
            conn = await oracledb.makeConn()

            let result = await conn.execute(sql,param);
            await conn.commit();
            console.log(result);

        }catch(e){
            console.log(e)
        }finally {
            await oracledb.clossConn(conn);
        }
    }

    // 성적 전체 조회
    select() {}

    // 성적 상세 조회
    selectIne(등록순서){}

}

module.exports = SungJuk;