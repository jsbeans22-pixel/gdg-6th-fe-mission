# css 문법
css 문법은 크게 선택자/선언부로 구분된다.
선택자 : css 요소를 적용할 html 태그를 선택하는 영역
선언부 : 선택자에서 선택한 태그에 적용할 스타일을 작성하는 영역으로, {}안에 넣는다.

h1{
    font-size:24px;
    color: blue;
}
ex) h1 > 선택자 / font-size:24px;와 color: blue; > 선언부

# css 적용하기
1. 내부 스타일 시트 사용
html 파일 내부에 css 코드를 작성하는 방법.
style 태그의 콘텐츠로 css 코드를 작성하면 된다.

<style>
    css 코드 내용
</style>
이런식으로..

예를 들어
<head>
    <title>내부 스타일 시트!</title>
    <style>
        h1{
            color: blue;
        }
    </style>
</head>
<body>
    <h1>글자를 꾸미자!</h1>
</body>
이렇게 하면 <style> 태그에서 h1 태그의 색상을 파란색으로 설정했기 때문에, <body> 안에 작성된 h1 태그의 글자(글자를 꾸미자!)가 파란색으로 출력된다.

2. 외부 스타일 시트 사용
별도로 css 코드를 작성하는 파일을 만든 뒤, html 문서와 css를 연결한다.

프로젝트 안에 style.css라는 파일을 만든 뒤, 내부 내용을 이렇게 작성한다

h1{
    color: blue;
}

그런 뒤 밑에처럼 html 파일에 링크 연결을 해주면?
<head>
    <title>외부 스타일 시트!</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>글자를 꾸미자!</h1>
</body>
글자를 꾸미자!가 파란색으로 출력된다.

3. 인라인 스타일
꾸미고싶은 태그에 직접 css 코드를 작성한다
<body>
    <h1 style="color: blue;">글자를 꾸미자!</h1>
</body>
Tailwind랑 비슷한 느낌?


## .css와 .module.css 파일을 사용하는 방식의 차이점
React 에서는 .css / .module.css / 라이브러리(TailwindCSS 등)
이렇게 세가지 방식으로 css 적용을 주로 한다.

그런데 일반 .css 방식에서는 classname이 전역(global)이기 때문에..
<button className="button"></button> 이런식으로 classname을 하나 만들게 되면
이게 전 프로젝트에서 공유된다.
따라서 큰 프로젝트에서 굉장히 많은 컴포넌트들을 만들게 되면
클래스 이름을 짓는것도 어렵고, 충돌이 일어날 수도 있다.

이때 컴포넌트마다 css를 분리하게 도와주는게 .module.css이다.

button 이렇게 classname를 만들게 되면 > 내부적으로 Button_button__x7f92 아런 식으로 고유한 번호를 부여한다.

따라서 충돌이 일어나지 않고 다른 컴포넌트에서 같은 classname을 사용해도 충돌이 일어나지 않는다.