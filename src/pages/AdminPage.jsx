import { useState } from "react";
import Navbar from "../components/Navbar";

function AdminPage() {
  const [registerName, setRegisterName] = useState("");
  const [registerPrice, setRegisterPrice] = useState("");
  const [registerQuantity, setRegisterQuantity] = useState("");
  const [registerCategory, setRegisterCategory] = useState("");

  const [stockName, setStockName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const [deleteName, setDeleteName] = useState("");

  const handleRegister = () => {
    console.log(
      `${registerName} ${registerQuantity} ${registerPrice} ${registerCategory} 가 등록되었습니다.`
    );
  };

  const handleStockAdd = () => {
    console.log(`${stockName} ${stockQuantity} 가 추가되었습니다.`);
  };

  const handleDelete = () => {
    console.log(`${deleteName} 가 삭제되었습니다.`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-16 w-[900px]">

        {/* 상품 등록 */}
        <section className="mb-24">
          <h2 className="mb-8 text-3xl font-bold text-black">
            상품 등록
          </h2>

          <div className="rounded-xl border border-gray-400 p-10">

            <div className="grid grid-cols-[100px_1fr_100px_1fr] items-center gap-x-10 gap-y-8">

              <label className="text-xl font-bold text-black">
                상품명
              </label>

              <input
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="상품명 입력..."
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

              <label className="text-xl font-bold text-black">
                수량
              </label>

              <input
                value={registerQuantity}
                onChange={(e) => setRegisterQuantity(e.target.value)}
                placeholder="0"
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

              <label className="text-xl font-bold text-black">
                가격
              </label>

              <input
                value={registerPrice}
                onChange={(e) => setRegisterPrice(e.target.value)}
                placeholder="0"
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

              <label className="text-xl font-bold text-black">
                카테고리
              </label>

              <input
                value={registerCategory}
                onChange={(e) => setRegisterCategory(e.target.value)}
                placeholder="카테고리 선택"
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

            </div>

            <p className="mt-6 text-sm text-gray-400">
              * 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.
            </p>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleRegister}
                className="h-14 w-52 rounded-xl bg-blue-500 text-xl text-white"
              >
                등록
              </button>
            </div>

          </div>
        </section>

        {/* 재고 추가 */}
        <section className="mb-24">

          <h2 className="mb-8 text-3xl font-bold text-black">
            재고 추가
          </h2>

          <div className="rounded-xl border border-gray-400 p-10">

            <div className="grid grid-cols-[100px_1fr_100px_1fr] items-center gap-x-10 gap-y-8">

              <label className="text-xl font-bold text-black">
                상품명
              </label>

              <input
                value={stockName}
                onChange={(e) => setStockName(e.target.value)}
                placeholder="상품명 입력..."
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

              <label className="text-xl font-bold text-black">
                수량
              </label>

              <input
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                placeholder="0"
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleStockAdd}
                className="h-14 w-52 rounded-xl bg-blue-500 text-xl text-white"
              >
                추가
              </button>
            </div>

          </div>
        </section>

        {/* 상품 삭제 */}
        <section className="mb-24">

          <h2 className="mb-8 text-3xl font-bold text-black">
            상품 삭제
          </h2>

          <div className="rounded-xl border border-gray-400 p-10">

            <div className="grid grid-cols-[100px_1fr] items-center gap-x-10">

              <label className="text-xl font-bold text-black">
                상품명
              </label>

              <input
                value={deleteName}
                onChange={(e) => setDeleteName(e.target.value)}
                placeholder="상품명 입력..."
                className="h-14 w-full rounded-lg border border-gray-400 px-5 text-lg outline-none"
              />

            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleDelete}
                className="h-14 w-52 rounded-xl bg-red-500 text-xl text-white"
              >
                삭제
              </button>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default AdminPage;