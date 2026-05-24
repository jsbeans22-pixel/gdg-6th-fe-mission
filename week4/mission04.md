# 리팩토링
CategoryPage
PricePage
SortPage
여기서 거의 비슷한 코드가 반복되고 있었다.

<div className="flex flex-col gap-10">
  {items.map((item) => (
    <Item key={item.id} item={item} />
  ))}
</div>

이 item 배열에서 상품을 하나씩 꺼내는 기능인데,

components 파일에 ProductList.jsx를 만들어
상품을 꺼내는 컴포넌트를 분리했다.

폴더 정리 같은 경우에는
내 수준에서는 이미 잘 정리되어 있는 것 같아
따로 손대지 않고, 역할만 정리해보면

- components: 재사용 가능한 컴포넌트 블록들 모음
- pages: 페이지 단위 컴포넌트 모음
- apis: 데이터 요청 관련 코드 모음
- store: Zustand 상태 관리 파일 모음

이정도로 볼 수 있다.

