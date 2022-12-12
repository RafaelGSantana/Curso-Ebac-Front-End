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

   return (
      <BrowserRouter>
         <GlobalStyle />
         <Router handleAddToCart={handleAddToCart} cart={cart} />
      </BrowserRouter>
   );
}

export default App;
