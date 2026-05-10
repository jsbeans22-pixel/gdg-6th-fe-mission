import { useState } from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import { sortedData } from "../data/mockData";

function SortPage() {
  const [sortType, setSortType] = useState("");

  const sortedItems = [...sortedData].sort((a, b) => {
    if (sortType === "name") {
      return a.itemName.localeCompare(b.itemName);
    }

    if (sortType === "price") {
      return a.price - b.price;
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-24 w-[700px]">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="mb-24 h-14 w-72 rounded border border-gray-400 px-5 text-lg"
        >
          <option value="">정렬 기준 선택</option>
          <option value="name">이름순</option>
          <option value="price">가격순</option>
        </select>

        <p className="mb-2 text-right text-xl text-black underline">
          내 구매 내역
        </p>

        <div className="flex flex-col gap-8">
          {sortedItems.map((item, index) => (
            <Item key={`${item.id}-${index}`} item={item} />
          ))}
        </div>

        <button className="sticky bottom-10 mt-10 h-14 w-full rounded-lg border-2 border-blue-500 bg-white text-lg text-blue-500">
          장바구니 구매하기
        </button>
      </main>
    </div>
  );
}

export default SortPage;