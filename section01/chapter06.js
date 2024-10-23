//1.묵시적 형변환
// ->자바스크립트 앤진이 알아서 형변환를 해줌

let num = 10;
let str = "20";

const result = num + str; //1020 문자열로 변환

// 2.명시적 형변환
// ->개발자가 내장함수등을 사용하여 직접 형변환을 해줌
// 문자 -> 숫자
let str1 = "123";
let strTONum1 = Number(str1); //문자열을 숫자로 변환   //Number는 문자열을 숫자로 변환할때 사용

let str2 = "10개";
let strTONum2 = parseInt(str2); //문자열을 숫자로 변환 //parseInt는 숫자가 앞에 있을때만 사용

// ->숫자 -> 문자
let num1 = 20;
let numTOStr1 = String(num1); //숫자를 문자로 변환   //String은 숫자를 문자로 변환할때 사용
