// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000); //배송지연 3초
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000); //음식을 식히는 사간 2초
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
    ㅠ;
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});
