import { useState } from "react";
import PLANTS from "./data";
export default function App() {
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <Plants />
        <Cart />
      </main>
    </>
  );
}
