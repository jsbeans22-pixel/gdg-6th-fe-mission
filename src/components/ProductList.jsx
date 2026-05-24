import Item from "./Item";

function ProductList({ items }) {
  return (
    <div className="flex flex-col gap-10">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;