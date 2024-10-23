//1. null 병합 연산자
//-->존재하는값을 추려내는기능
//--> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

let userName;
let nickName = "rjsgud49";

let displayname = userName ?? nickName; //nickName이 출력됨

//2. typeof 연산자
//-->값의 타입을 문자로 반환해주는 연산자
let var7 = 1;
var7 = "hello"; //string
var7 = true; //  boolean
var7 = 2048; //number

let t1 = typeof var7;

//3.삼항 연산자
//-->항을 3개사용하는 연산자
//-->조건식을 이용하여  참일때와 거짓일때의 값을 다르게 변환
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수이면 "짝수", 홀수이면 "홀수"를 할당
let res = var8 % 2 === 0 ? "짝수" : "홀수"; //형태(조건식 ? 참일때 : 거짓일때);
