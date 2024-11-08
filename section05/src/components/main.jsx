import "./Main.css";
// jsx 주의사함
//1. 중괄호 내부에는 자바스크립트 표현식만 가능하다
//2. 숫자 문자열 배열 만 렌더링 가능하다
//3. 모든 태그는 닫아야 한다
//4. 최상위 태그는 하나여야 한다

const main = () => {
    const user = {
        name: "박건형",
        islogin: true,
    };

    if (user.islogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    //     return (
    //         <>
    // {user.islogin ?(
    //     <div>로그아웃</div>
    //     ):(
    //     <div>로그인</div>
    // )}
    //         </>
    //     );
};

export default main;
