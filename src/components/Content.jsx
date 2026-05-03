import { useState } from "react";

function Content() {
    const [keyword, setkeyword] = useState("");

    return(
        <div>
            <div>
                <input
                    value = {keyword}
                    onChange = {(e) => setkeyword(e.target.value)}
                    placeholder="상품 검색..."
                />
                <button>검색</button>
            </div>

            <div>
                <img src="/gdg-logo.svg" alt="GDG 로고" />
            </div>
            
            <p>검색 결과가 없습니다.</p>
        </div>
    )
}

export default Content;