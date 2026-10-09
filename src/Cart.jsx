import CartItem from "./CartItem";

export default function Cart({ addToCart, removeFromCart, items }) {
  if (items.length === 0) return <p>Empty cart.</p>;
  return (
    <ul>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </ul>
  );
}
