import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import { getSortedItems } from "../apis/itemApi";

function SortPage() {
  const [sortType, setSortType] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getSortedItems();
      setItems(data);
    };

    fetchItems();
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortType === "price") {
      return a.price - b.price;
    }

    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-gray-500">
      <Navbar />

      <main className="mx-auto mt-24 w-[900px]">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="mb-24 h-14 w-72 rounded border border-gray-400 px-5 text-lg"
        >
          <option value="">정렬 기준 선택</option>
          <option value="name">이름순</option>
          <option value="price">가격순</option>
        </select>

        <p className="mb-4 text-right text-2xl text-black underline">
          내 구매 내역
        </p>

        <div className="flex flex-col gap-10">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
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
