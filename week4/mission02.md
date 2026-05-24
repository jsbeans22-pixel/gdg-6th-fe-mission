# ESLint란??
ESLint는 JavaScript/React 코드에서 실수, 위험한 코드, 안 좋은 습관을 찾아주는 코드 검사 도구이다.

이는 단순히 코드가 오류로 인해 돌아가냐 / 안 돌아가냐만 보는 것이 아니라
더 좋은 방식인지 아닌지도 검사해준다.

## 검사해주는 예시들
1. 사용하지 않는 변수
만들어졌지만 아무곳에 사용되지 않는 변수를 찾아 알려준다.

2. react hook 규칙을 위반한 경우
- Hook은 컴포넌트 최상단에서만 사용
- 조건문/반복문/중첩 함수 안에서 사용 금지
- React 함수 컴포넌트 안에서만 사용
이런 것들

오류가 나는 경우에는 그냥 파악이 가능하지만,
실행은 되나 위험하게 동작하는 코드도 존재한다.
ESLint는 이런 것들을 잡아준다.

3. 불필요한 코드
예를 들자면

console.log("test");

이렇게 개발 중 테스트 용도로 만들어진 코드가 있다면,
최종 제출시에는 이를 지우도록 설정이 가능하다.




## Prettier란??
코드를 자동으로 예쁘게 정리해주는 도구.
이는 코드의 내용이나 기능은 건드리지 않고
들여쓰기 / 줄바꿈 / 세미콜론 / 따옴표 스타일 등
코드의 모양만 정리해준다.

협업을 진행할 경우 이 도구의 중요성이 커지는데,
사람들의 코드 작성 스타일이 조금씩 다르므로
이를 일관되게 보정해주기 때문이다.


## ESLint / Prettier 직접 적용하기
1. 터미널에서 Prettier 설치
(ESLint는 이미 있으므로, Prettier만 설치하면 된다)

npm install -D prettier 를 입력한다

2. Prettier 설정 파일 만들기
프로젝트 파일에 .perttierrc 파일을 만든 후
안에 어떻게 정리할지 규칙을 넣는다.

3. package.json에 명령어(scripts) 추가하기
기존에 길게 쳐야 했던 실행 명령을 짧게 줄일 수 있다.

"format": "prettier --write .",
"format:check": "prettier --check ."

이 두줄을 추가했다.

이제 실행을 해보면

- ESLint 실행
실행 결과 안쓰는 변수 한개를 발견했다고 한다.

src/main.jsx
1:8  error  'React' is defined but never used

main.jax에
import React from "react";
이게 있었는데,
최신 react/vite에서는 직접 import를 하지 않아도
jsx 사용이 가능하다고 해 위 줄을 삭제했다.

- ptrttier 실행
실행 결과 아래 결과가 나왔다.

Checking formatting...
[warn] .prettierrc
[warn] eslint.config.js
[warn] package.json
[warn] public/data/category.json
[warn] public/data/item.json
[warn] public/data/priceSelected.json
[warn] public/data/sorted.json
[warn] src/apis/itemApi.js
[warn] src/App.css
[warn] src/App.jsx
[warn] src/components/Content.jsx
[warn] src/components/Footer.jsx
[warn] src/components/Item.jsx
[warn] src/components/Navbar.jsx
[warn] src/index.css
[warn] src/main.jsx
[warn] src/pages/AdminPage.jsx
[warn] src/pages/CategoryPage.jsx
[warn] src/pages/PricePage.jsx
[warn] src/pages/SortPage.jsx
[warn] vite.config.js
[warn] week1/mission01.md
[warn] week1/mission02.md
[warn] week1/mission03.md
[warn] week1/mission04.md
[warn] week2/mission01.md
[warn] week2/mission02.md
[warn] week2/mission03.md
[warn] week3/mission01.md
[warn] week3/mission02.md
[warn] week3/mission03.md
[warn] week4/mission01.md
[warn] week4/mission02.md
[warn] Code style issues found in 33 files. Run Prettier with --write to fix.

npm run format
이를 수행한 결과
빈 줄/공백, 들여쓰기 정도가 수정되었다.