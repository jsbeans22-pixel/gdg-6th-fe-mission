## Content 컴포넌트 분석

# import { useState } from "react";

useState라는 기능을 react에서 가져온다는 뜻

useState란??
기존에는 변수를 선언한 뒤 값을 변경하면 화면에 변경한 값 표시가 안됨..

let a = 1;
a = 10;

> > 10으로 바뀐 값이 화면에 안뜸

이를 해결하는 기능이 useState
값이 바뀌면 변경을 감지해 화면에 뜨는 값도 바꾸어 준다

# const [keyword, setkeyword] = useState("");

useState("초기 값") 란?? [초기 값, 값 변경 함수] 이렇게 반환해서 주는 react의 기능중 하나

#

<input
value = {keyword}
onChange = {(e) => setkeyword(e.target.value)}
placeholder="상품 검색..."
/>

<input/> : 사용자가 글을 쓸 수 있는 박스 생성
placeholder="상품 검색..." : 아무것도 쓰지 않았을 때 보이는 문구
value = {keyword} : {}안에 값이 있는 이유 : js 코드를 안에 작성하겠다는 의미..

onChange = {(e) => setkeyword(e.target.value)} : 사용자가 입력할 때마다 함수가 실행됨..
() => ~~ : 화살표 문법으로, 함수를 간단하게 표현한 것

자바스크립트 문법은 아직 익숙치 않아 따로 공부를 해야 할 것 같다..
