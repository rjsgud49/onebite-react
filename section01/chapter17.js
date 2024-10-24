//1. 배열 생성
let arrA = new Array(); //배열 생성자 방식
let arrB = []; //배열 리터럴 방식

let arrC = [1, 2, 3, 4, true, "hello", null, undefined, () => {}, {}, []];
//배열 요소의 타입은 제약이 없다.

//2. 배열 요소 접근
let item1 = arrC[0]; //0부터 시작//번호를 인텍스라고 부름
let item2 = arrC[1];

arrC[0] = "hello"; //배열 요소의 값 변경
