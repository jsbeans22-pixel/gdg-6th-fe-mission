# React Router
React에서 페이지 이동 기능을 만들어주는 라이브러리.
React는 원래 index.html 하나만 사용하는 구조로
홈 페이지 / 로그인 페이지 / 마이페이지..
이렇게 페이지를 이동하고 싶어도 할 수 없다
그래서 사용하는게 React Router

url에 따라서 다른 컴포넌트를 보여주게 만들어준다!
예를 들어..
localhost:5173/          > 홈 화면 보여줌
localhost:5173/user/1    > 미리 만들어놓은 user1page를 보여준다


# React Router 적용과정
1. 터미널에서 npm install react-router-dom 을 입력해
React에 React Router를 추가한다

2. 원하는 페이지의 컴포넌트를 만든다
User1Page.jsx / User2Page.jsx 이런 식으로..

3. main.jsx에 React Router 코드를 추가한다
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import User1Page from "./pages/User1Page";
import User2Page from "./pages/User2Page";
이렇게

4. router를 만든다
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/1",
    element: <User1Page />,
  },
  {
    path: "/user/2",
    element: <User2Page />,
  },
]);
이렇게 페이지를 추가해준다

5. RouterProvider 적용
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);





# TailwindCSS
className 안에서 미리 만들어진 css 조각들을 바로 조립해 사용하게 도와주는 라이브러리(인라인 방식과 비슷하다)

에를 들어
<button className="bg-blue-500 text-white p-4 rounded-lg">
  로그인
</button>
이런식으로 css파일을 따로 만들 필요 없이 한줄에서 원하는 스타일을 전부 적용 가능하다
또 classname 충돌 문제도 거의 해결 가능


# Tailwind 적용과정
1. Tailwind 설치
npm install tailwindcss @tailwindcss/vite

2. vite.config.js 수정
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

3. CSS 파일 수정
src/index.css에 @import "tailwindcss"; 를 추가한다