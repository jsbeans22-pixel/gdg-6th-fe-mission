# props
부모 컴포넌트가 자식 컴포넌트에게 전달하는 값

예를 들어..
버튼 컴포넌트를 제작했다고 가정
function Button() {
  return <button>버튼</button>;
}

그런데 로그인/회원가입/삭제 등등 글자만 다른 컴포넌트들을 만들고 싶을 때
props가 없다면..
function LoginButton() {
  return <button>로그인</button>;
}

function SignupButton() {
  return <button>회원가입</button>;
}
...
이런식으로 계속해서 새로운 컴포넌트를 만들어야 한다.
하지만 props를 사용하면?
function Button(props) {
  return <button>{props.text}</button>;
}

<Button text="로그인" />
<Button text="회원가입" />
<Button text="삭제" />

이런 식으로 하나의 컴포넌트로 해결이 가능하다
컴포넌트 재사용이 가능해짐.

# state
변할 수 있는 데이터
1주차에 설명/페이지에 적용해놔서 간단하게 설명시 -
기존 변수를 선언하게 되면 변수가 바뀌어도 화면은 바뀌지 않는다
이를 해결하는게 state
값이 바뀌게 되면 이를 감지해서 화면을 업데이트해준다


# React Hooks
1. useState
변하는 값을 기억하게 해주는 기능.
아까 설명한 state를 만들때 사용한다

2. useEffect
특정 상황에서 자동으로 실행되는 코드.
값이 변경되거나 특정 행동을 하면 자동으로 실행된다

3. useEffect
React Router 라이브러리 기능(위 두개는 React 기본 기능)
코드로 페이지를 이동시키는 기능.
로그인 후 이동
회원가입 완료 후 이동
이런 상황들에서 코드가 자동으로 특정 페이지로 이동시킨다