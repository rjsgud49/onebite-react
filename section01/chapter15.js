//1. 객체생성
let obj1 = new Object(); //객체 생성자 방식
let obj2 = {}; //객체 리터럴 방식

//2. 객체 프로퍼티 or 객체속성
let person = {
    name: "박건형", //KEy:value
    age: 17,
    hobby: "독서",
    grade: "고등학생",
    extra: {},
    10: 20,
    "like cat": "true",
};

//3. 객체 프로퍼티 를 다루는 방법
//3.1 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

let property = "hobby";
let hobby = person[property];

//3.2 새로운 프로퍼티를 추가하는방법
person.job = "학생";
person["fav food"] = "라면";

//3.3 프로퍼티를 수정하는 방법
person.job = "고등학생";
person["fav food"] = "김밥";

//3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["fav food"];

//3.5 프로퍼티 존재 여부를 확인하는방법
let resurlt1 = "name" in person;
let resurlt2 = "cat" in person;
