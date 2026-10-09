export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li>
      <p>{item.image}</p>
      <p>{item.name}</p>
      <p>{item.quantity}</p>
      <div>
        <button onClick={() => removeFromCart(item)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </li>
  );
}
