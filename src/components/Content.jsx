import { useState } from "react";

function Content() {
  const [keyword, setKeyword] = useState("");

  return (
    <main className="flex flex-1 flex-col items-center px-10">
      {/* 검색 영역 */}
      <div className="mt-24 flex w-full justify-center gap-5">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="상품 검색..."
          className="h-14 w-[700px] rounded-lg border border-gray-400 px-5 text-lg outline-none"
        />

        <button className="h-14 w-40 rounded-lg bg-blue-500 text-lg text-white">
          검색
        </button>
      </div>

      {/* 빈 결과 영역 */}
      <div className="mt-40 flex flex-col items-center">
        <img src="/gdg-logo.svg" alt="GDG 로고" className="w-72 opacity-20" />

        <p className="mt-6 text-xl text-gray-400">검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;
