//1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
    //console.log("num은 10보다 크거나 같습니다");
    //console.log("조건이 참입니다");
} else if (num >= 5) {
    //console.log("num은 5 이상입니다");
} else {
    //console.log("num은 10보다 작습니다");
    //console.log("조건이 거짓입니다");
}

//2. switch 조건문 (switch문)
//-->switch문은 if문과 기능자체는동일, 다수의 조건을 처리할때 if문보다 직관적이다
let animal = "cat";

switch (animal) {
    case "dog": {
        console.log("강아지");
        break;
    }

    case "cat": {
        console.log("고양이");
        break;
    }
    case "baer": {
        console.log("곰");
        break;
    }

    case "bird": {
        console.log("새");
        break;
    }
    default: {
        console.log("그런동물은 전 모릅니다");
    }
}
