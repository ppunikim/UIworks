// 변수 선언
//const : 선언과 동시에 값 지정, 선언과 동시에 값 초기화
const num1 = 10;
// num1 = 41;   : const로 선언한 변수는 다시 값 지정할 수 없다.

//션언과 동시에 값 지정 또는 선언 후 값 지정
//let : 선언과 초기화 동시에 하지 않아도 된다.
let num2;
num2 = 10; // 이후에 다시 값을 저장(변경) 할 수 있음
num2 = 50;

// 함수 선언
// 매개변수로 num1을 갖는 func1 이라는 함수 선언하기
//함수의 코드를 실행하려면 이후에 호출해 주어야 한다.
function func1(num1) {
  console.log(num1);
}
func1();
func1(10);

function add(num1, num2) {
  return num1 + num2;
}
const result1 = add(100, 200);
console.log(result1);

const str = add("korea", "대한민국");
console.log(str);
