const num1 = 100;
const num2 = 200;
const num3 = 300;
const sum = num1 + num2 + num3;
console.log("결과 : ", sum);

function add(num1, num2) {
  console.log("add 함수 결과 : ", num1 + num2);
}
add(100, 200);

function view(res) {
  console.log(res.text);
}

// 객체와 변수 선언을 같이 했다.
const data = { text: "korea", html: "<p>Korea</p>" };
view(data);

// 빈 객체에 변수 추가하면서 초기화 같이 진행한다.
// 객체선언 따로, 변수선언 따로
const vo1 = {};
vo1.text = "";
vo1.name = "sunny";
console.log(vo1);

function myfunc(result) {
  console.log(result);
}
myfunc(vo1);
