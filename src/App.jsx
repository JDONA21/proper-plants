import { useState } from "react";
import Plants from "./Plants";
import Cart from "./cart";

export default function App() {
  const [items, setItems] = useState([]);

  const addToCart = (plant) => {
    const existingItem = items.find((item) => item.id === plant.id);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setItems([...items, { ...plant, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setItems(
      items
        .map((item) =>
          item.id === itemToRemove
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )

        .filter((item) => item.quantity > 0),
    );
  };
  return (
    <>
      <h1>Proper Plants</h1>
      <Plants addToCart={addToCart} />
      <Cart
        items={items}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
}
