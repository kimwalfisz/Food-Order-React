import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import CartContextProvider from "./store/cart-context.jsx";
import UserProgressContextProvider from "./store/UserProgressContext.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Shop />
        <Cart />
        <Checkout />
        <OrderSummary />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
