import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Item from "../components/Item";

import { getProducts } from "../apis/itemApi";
import ProductList from "../components/ProductList";

function CategoryPage() {
  const [items, setItems] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["의류", "전자기기", "화장품", "식품"];

  useEffect(() => {
    const fetchItems = async () => {
      // const data = await getCategoryItems();
      const data = await getProducts();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-20 w-[900px]">
        {/* 카테고리 선택 */}
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
                    setSelectedCategory(category);
                    setIsOpen(false);
                  }}
                  className={`block h-12 w-full border-b border-gray-400 px-5 text-left text-lg last:border-b-0 ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 구매 내역 */}
        <p className="mb-4 text-right text-2xl text-black underline">
          내 구매 내역
        </p>

        {/* 상품 리스트 */}
        <ProductList items={items} />

        {/* 구매 버튼 */}
        <button className="mt-20 h-14 w-full rounded-xl border-2 border-blue-500 text-xl text-blue-500">
          장바구니 구매하기
        </button>
      </main>
    </div>
  );
}

export default CategoryPage;
