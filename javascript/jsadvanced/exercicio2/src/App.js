import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { products } from './products';

import { Router } from './Router';
import GlobalStyle from './styles/global.js';

function App() {
   const [cart, setCart] = useState([]);

   function handleAddToCart(id) {
      const selectedSuplement =  products.filter(item => item.id === id)[0];
      setCart([...cart, selectedSuplement]);
   }

   function cleanCart() {
      setCart([]);
   }

   return (
      <BrowserRouter>
         <GlobalStyle />
         <Router handleAddToCart={handleAddToCart} cart={cart} cleanCart={cleanCart} />
      </BrowserRouter>
   );
}

export default App;
