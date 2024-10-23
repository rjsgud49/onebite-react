//1.대입 연산자
let ver1 = 10;

//2.산술 연산자
let num1 = 10 + 20;
let num2 = 10 - 20;
let num3 = 10 * 20;
let num4 = 10 / 20;
let num5 = 10 % 20;

let num6 = (1 + 2) * 10;

//3.복합 대입 연산자
let num7 = 10;
// num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

//4.증감 연산자
let num8 = 10;
num8++;
num8--;
++num8; //전위 연산
num8++; //후위 연산

//5.논리 연산자
let or = true || false; //둘중 하나만 참이면 참
let and = true && false; //둘다
let not = !true; //반전으로 사용

//6.비교 연산자
let comp1 = 1 === 2; //거짓
let comp2 = 1 !== 2; //진실

let comp3 = 1 < 2; //참 //크다
let comp4 = 2 < 1; //거짓

let comp5 = 1 <= 2; //참  //같거나 크다
let comp6 = 2 <= 1; //거짓
