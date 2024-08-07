import { useContext } from "react";
import { CartContext } from "../store/cart-context.jsx";
import Modal from "../UI/Modal.jsx";
import Button from "../UI/Button.jsx";
import { currencyFormatter } from "../util/formatting.js";
import { UserProgressContext } from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalAmount = cartCtx.items.reduce(
    (acc, curr) => curr.price * curr.count + acc,
    0
  );

  return (
    <Modal open={progressCtx.progress === "cart"} className="cart" onClose={progressCtx.progress === 'cart' ? progressCtx.hideCart : null}>
      <h2>your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalAmount)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={progressCtx.hideCart}>
          close
        </Button>
        {cartCtx.items.length && <Button onClick={progressCtx.showCheckout}>go to checkout</Button>}
      </p>
    </Modal>
  );
}
