/*화살표(arrow) 함수
ES5(ECMASCRIPT 2015) 에서 시작된 새로운 개념의 함수
fuction 키워드가 사라졌다.
()로 시작되는 함수 명령문
() 다음에 => 연산자가 나타난다.
*/
const func1 = () => {
  console.log("나는 화살표(Arrow) 함수 입니다.");
};
func1();

//한 개의 매개변수를 받는 func2 선언
const func2 = (num) => {
  console.log(num);
};

/*
두 개의 매개변수를 받고, 
두 값을 더해서 return 해라
*/
const func3 = (num1, num2) => {
  return num1 + num2;
};

/* 위의 함수와 같은 의미이다. 화살표 함수의 꽃이라 불리며,
두 개의 매개변수를 받아서 덧셈해 return 하는 func4 함수
함수 본체에 다른 코드가 없이 오로지 return 명령문만 있을 경우
{} 와 return 키워드를 생략할 수 있다.
*/
const func4 = (num1, num2) => num1 + num2;

/*
매개변수로 받은 num1을 아무일도 하지 말고 return 해라
*/
const func5 = (num1) => num1;
const func6 = (res) => func5(res);
const result = func6(100); // 이 코드부터 해석이 시작된다.
console.log(result);

const func51 = function (num1) {
  return num1;
};
