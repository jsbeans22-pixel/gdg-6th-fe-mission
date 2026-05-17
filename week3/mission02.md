# 동기와 비동기는 무엇인가?
- 동기 : 순서대로 명령을 처리한다.
예를 들자면
console.log("1");
console.log("2");
console.log("3");

이 경우
1 > 2 > 3 순서대로 명령을 처리한다.
하지만 인터넷 요청은 시간이 오래 걸리므로
동기로 이를 처리한다면 서버에서 응답이 올 때까지 페이지가 멈추게 된다.
따라서 이렇게 응답을 기다리는 시간동안 다른 작업을 할 경우
더욱 효율적으로 페이지를 로딩 할 수 있다.
이때 사용되는게 비동기!

에를 들면
console.log("시작");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

console.log("끝");

이 경우 시작 출력 > 데이터 요청 > 끝 출력 > 데이터가 오면 등록해둔 함수(callback)가 실행됨

이렇게 기다리는 시간 동안 다른 작업을 수행해 유저 입장에서 더욱 빠르게 페이지 로딩이 가능하다.

비유를 하자면 
동기 : 컵라면에 물을 넣음 > 3분동안 가만히 기다림 > 3분 지나면 먹음
비동기 : 컵라면에 물을 넣음 > 3분동안 다른 활동 함 > 3분 지나면 먹음
이런 느낌인 것 같다.

# Promise
- 나중에 완료될 작업의 결과를 담아두는 객체
인터넷 요청은 기다리는 시간이 걸리기 때문에
일단 Promise라는 객체를 반환한다.
Promise에는 세가지 상태( pending / fulfilled / rejected )가 있다.
아직 데이터가 오지 않은 경우 pending,
데이터가 온 경우 fulfilled,
에러가 발생한 경우 rejected.

에를 들자면

const result = fetch("주소");
console.log(result);

이 경우, result에 데이터가 들어가는 것이 아니라 
result가 Promise 객체이다.
그리고 그 Promise 내부 상태는
pending / fulfilled / rejected 중 하나이다.

실제 출력 결과:
바로 데이터가 오지 않으므로..
시작하고 데이터를 기다리는 동안에는
Promise { <pending> }

데이터가 오면
Promise { <fulfilled>: value }


데이터를 가져오는데 실패하면
Promise { <rejected>: error }

# async/await
- await
Promise 작업이 끝날 때까지 기다린 뒤 다음 줄을 실행한다.
예를 들어,
await가 없을 경우: 데이터 요청 > 아직 데이터 안왔는데 데이터 이용한 작업 수행

에시 코드를 들자면
function test() {
  fetch("주소");

  console.log("작업 시작!");
}

요청을 보내고 즉시 "작업 시작!"을 출력한다..

await 사용시: 데이터 요청 > 데이터가 올 때까지 기다림 > 데이터가 오면 이때 작업 수행

에시 코드를 들자면
async function test() {
  await fetch("주소");

  console.log("작업 시작!");
}

요청을 보내고 > 응답이 오면 이때 "작업 시작!"을 출력한다!

그런데 await는 async 함수 안에서만 사용할 수 있다.
그래서 async를 붙여
"이 함수는 비동기 함수"라고 알려주게 된다.

- async
"이 코드에서는 기다리는 것을 허용한다" 라고 알려주는 기능.
즉 await 사용을 허가하는 기능이다.

# 콜백 함수
특정 함수를 나중에 실행하도록 전달하는 함수
예를 들자면

setTimeout(() => {
  console.log("3초 뒤 실행");
}, 3000);

3초 뒤에 함수가 실행된다.

다른 예시를 들자면

button.addEventListener("click", () => {
  console.log("클릭됨");
});

클릭되면 함수가 실행된다.
함수를 바로 실행하지 않고 함수 자체를 전달한다.
따라서 콜백 함수 = 나중에 실행되도록 전달된 함수