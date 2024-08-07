import appLogo from "../assets/logo.jpg";
import { useContext } from "react";
import Button from "../UI/Button";
import { CartContext } from "../store/cart-context.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCount = cartCtx.items.reduce((acc, curr) => acc + curr.count, 0);
  const progressCtx = useContext(UserProgressContext);

  return (
    <div id="main-header">
      <div id="title">
        <img src={appLogo}></img>
        <h1>Reactfood</h1>
      </div>
      <Button onClick={progressCtx.showCart} textOnly>
        cart({totalCount})
      </Button>
    </div>
  );
}
