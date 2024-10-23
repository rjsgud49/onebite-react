// for문
for (let idx = 1; idx <= 10; idx++) {
    //for (초기식;조건식;증감식) {실행문}
    if (idx % 2 === 0) {
        continue; //반복문을 중단하고 다음 반복문으로 넘어감
    }
    console.log(idx);

    if (idx >= 5) {
        break; //반복문을 중단함
    }
}
