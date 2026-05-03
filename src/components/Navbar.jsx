function Navbar () {
    return(
        <div>
            <a>
                <img src="/gdg-logo.svg" alt="GDG 로고" />
            </a>

            <div>
                <button>카테고리 필터링</button>
                <button>가격 범위 필터링</button>
                <button>상품 정렬</button>
            </div>

            <button>관리자</button>

        </div>
    )
}

export default Navbar;