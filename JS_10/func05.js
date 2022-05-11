/* JSON객체(Java Script Object Notation)
JSON 객체 구조가 만들어지기 전에는
클라이언트와 서버간 데이터 주고받을 때(Data Exchange)
문자열 또는 XML(eXchange Markup Lang.)로 주고받았다.
문자열 구조는 데이터를 보내고 받기는 쉽지만 
Parsing( : 으로 나눈 것 ) 등의 과정을 거쳐야 데이터를 사용할수 있는
문제점이 있다.
XML 문서는 tag를 중심으로 구조적으로 문서 데이터를 작성한다.
다양한 도구를 사용하면 쉽게 데이터를 활용하기가 쉽다.
하지만 XML 문서의 문법 구조가 매우 까다롭고, 
데이터가 겹치거나 많아지면 문법 오류로 인한 데이터 손실이 발생한다.

2000년대 초반, 더글라스 크록포드 등에 의해 JSON 데이터 구조가 제안된다.
이 데이터 구조 제안은 정말 혁명적이었다.
모든 데이터를 key-value 쌍으로 규정해, 매우 단순화 시켰다.
단순화된 구조는 당시까지 현존하던 거의 대부분의 프로그래밍 언어의 
기본 자료형으로 쉽게 변환이 가능했다.
네트워크를 통해 데이터를 전송할 때 데이터 양을 획기적으로 
줄일 수 있었다.
어떤 데이터 자료형이건 JSON String 문자열로 변환하여 교환할 수 있다.
순식간에 XML 형태의 데이터 교환을 대체하는 새로운 구조가 됐다.
*/
const stVO = {};

stVO.stNum = "s100";
stVO.stName = "햇살";
stVO.stTel = "010.111.1111";
stVO.stAddr = "광주광역시";
stVO.stDept = "전자과";

console.log(stVO);

//JS에서 가장 단순하게 JSON을 만드는 방법
const scoreVO = { intKor: 60, intEng: 20, intMath: 60 };

//이미 만들어진 JSON객체에 새로운 변수(요소, 속성) 추가하기
/* 아래와같은 코드가 실행될 때 만약 기존에 intMusic이 있으면
값이 바뀌고, 없으면 새로운 속성이 추가된다.
*/
console.log(scoreVO);
scoreVO.intMusic = 69;
console.log(scoreVO);

