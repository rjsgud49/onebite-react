//1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

//2. 매서드
//값이 함수인 프롬퍼티를 말함

const person = {
    name: "박건형",
    sayHi() {
        console.log("안뇽!!");
    },
};

person.sayHi();
perdon["sayHi"]();
