import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Item from "../components/Item";

import { getPriceSelectedItems } from "../apis/itemApi";
import ProductList from "../components/ProductList";

function PricePage() {
  const [low, setLow] = useState("");
  const [high, setHigh] = useState("");

  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getPriceSelectedItems();

      setAllItems(data);
      setFilteredItems(data);
    };

    fetchItems();
  }, []);

  const handleSearch = () => {
    const lowPrice = low === "" ? 0 : Number(low);
    const highPrice = high === "" ? Infinity : Number(high);

    const result = allItems.filter((item) => {
      return item.price >= lowPrice && item.price <= highPrice;
    });

    setFilteredItems(result);
  };

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-16 w-[900px]">
        {/* 검색 영역 */}
        <div className="mb-20 flex justify-center gap-6">
          <input
            value={low}
            onChange={(e) => setLow(e.target.value)}
            placeholder="최소 가격"
            className="h-14 w-56 rounded-lg border border-gray-400 px-5 text-lg outline-none"
          />

          <input
            value={high}
            onChange={(e) => setHigh(e.target.value)}
            placeholder="최대 가격"
            className="h-14 w-56 rounded-lg border border-gray-400 px-5 text-lg outline-none"
          />

          <button
            onClick={handleSearch}
            className="h-14 w-36 rounded-lg bg-blue-500 text-lg text-white"
          >
            검색
          </button>
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

export default PricePage;
