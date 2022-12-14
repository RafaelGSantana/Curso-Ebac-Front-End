import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export function Router({ handleAddToCart, cart, cleanCart }) {
   return (
      <Routes>
         <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
         <Route path="/cart" element={<Cart cart={cart} cleanCart={cleanCart} />} />
      </Routes>
   )
}