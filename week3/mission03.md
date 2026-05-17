# fetch()
- 자바스크립트에서 서버에 데이터를 요청할 때 사용하는 내장 함수
로그인 요청 / 게시글 가져오기 / 쇼핑몰 상품 목록 가져오기 등..
정보가 웹페이지 내부에 있는 것이 아닌 서버에 있기 때문에 이를 요청한다.

fetch는 비동기 함수이며,
.then()으로 작업 완료 후 실행할 함수를 등록한다.

- .then
비동기 작업이 끝난 뒤 실행할 함수 등록.

예를 들면,

fetch("주소")
  .then((response) => {
    console.log("데이터 도착!");
  });

1. fetch가 서버에 요청 보냄
2. 서버 응답을 기다림
3. 응답 오면 then 안 함수 실행

# axios
- 서버와 데이터를 주고받기 쉽게 만들어진 자바스크립트 라이브러리
fetch, axios 모두 서버 요청이 가능하지만, axios는 fetch보다 더 편하게 만든 버전이다.

fetch는 JSON 변환을 직접 해줘야 한다.
* JSON 변환: 서버가 보내준 JSON 형식의 데이터를 자바스크립트 객체로 변환하는 것

예시 코드를 보면

fetch("주소")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

하지만 axios는 자동으로 JSON 변환을 해준다.

axios.get("주소")
  .then((response) => {
    console.log(response.data);
  });

따라서 코드가 짧아진다.

정리하자면,
fetch는 자바스크립트 내장 함수이고,
axios는 외부 라이브러리이다.

둘 다 서버와 데이터를 주고받을 때 사용하지만,
axios는 JSON 변환을 자동으로 해주기 때문에
더 간단하게 사용할 수 있다.