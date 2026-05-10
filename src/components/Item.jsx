import { useState } from "react";

function Item({ item }) {
  const [count, setCount] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const handleCountChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력 가능
    if (/^\d*$/.test(value)) {
      setCount(value);
    }
  };

  const handleCartClick = () => {
    setIsAdded(true);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-400 p-6">
      <div className="text-left">
        <h2 className="mb-6 font-bold text-black">{item.itemName}</h2>

        <p>
          <span className="text-black">{item.price} 원</span>
          <span className="ml-4 text-sm text-gray-400">
            남은 수량: {item.quantity}개
          </span>
        </p>
      </div>

      <input
        value={count}
        onChange={handleCountChange}
        disabled={isAdded}
        placeholder="개수 입력..."
        className="h-10 w-40 rounded border border-gray-400 px-4"
      />

      <button
        onClick={handleCartClick}
        disabled={isAdded}
        className={`h-10 w-28 rounded text-white ${
          isAdded ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        장바구니
      </button>
    </div>
  );
}

export default Item;