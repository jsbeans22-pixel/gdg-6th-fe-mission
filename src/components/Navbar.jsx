import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-16 border-b border-gray-200">
      <div className="flex h-full items-center justify-between px-10">
        <button onClick={() => navigate("/")}>
          <img src="/gdg-logo.svg" alt="GDG 로고" className="w-16" />
        </button>

        <div className="flex gap-10 text-lg">
          <button
            onClick={() => navigate("/category")}
            className={location.pathname === "/category" ? "font-bold text-blue-500" : ""}
          >
            카테고리 필터링
          </button>

          <button
            onClick={() => navigate("/price")}
            className={location.pathname === "/price" ? "font-bold text-blue-500" : ""}
          >
            가격 범위 필터링
          </button>

          <button
            onClick={() => navigate("/sort")}
            className={location.pathname === "/sort" ? "font-bold text-blue-500" : ""}
          >
            상품 정렬
          </button>
        </div>

        <button className="rounded-lg border border-blue-500 px-4 py-2 text-blue-500">
          관리자
        </button>
      </div>
    </div>
  );
}

export default Navbar;