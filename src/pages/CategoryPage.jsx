import { useState } from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import { categoryData } from "../data/mockData";

function CategoryPage() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["의류", "전자기기", "화장품", "식품"];

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-20 w-[700px]">
        <div className="relative mb-24 w-[220px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 w-full rounded-lg border border-gray-500 bg-white px-5 text-left text-lg"
          >
            카테고리 선택
          </button>

          {isOpen && (
            <div className="absolute left-0 top-12 z-10 w-full overflow-hidden rounded-lg border border-gray-500 bg-gray-200">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    console.log(`${category} 카테고리 클릭`);
                    setIsOpen(false);
                  }}
                  className="block h-12 w-full border-b border-gray-400 px-5 text-left text-lg last:border-b-0"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="mb-2 text-right text-black underline">내 구매 내역</p>

        <div className="flex flex-col gap-6">
          {categoryData.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>

        <button className="mt-24 h-14 w-full rounded-lg border-2 border-blue-500 text-lg text-blue-500">
          장바구니 구매하기
        </button>
      </main>
    </div>
  );
}

export default CategoryPage;