import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartState, setCartState] = useState(false);

  const openCartHandler = () => setCartState(true);
  const closeCartHandler = () => setCartState(false);

  return (
    <CartProvider>
      {cartState && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
