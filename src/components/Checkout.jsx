import { useContext } from "react";
import { postOrder } from "./http";
import { CartContext } from "../store/cart-context.jsx";
import { UserProgressContext } from "../store/UserProgressContext.jsx";
import Modal from "../UI/Modal.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalAmount = cartCtx.items.reduce(
    (acc, curr) => curr.price * curr.count + acc,
    0
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const order = { items: cartCtx.items, customer: data };
    try {
      const resData = await postOrder(order);
      progressCtx.hideCheckout();
      cartCtx.resetCart();
      event.target.reset();
      progressCtx.showSummary();
    } catch (error) {
      console.log("an error occured:", error.message);
    }
  }

  return (
    <Modal open={progressCtx.progress === "checkout"} onClose={progressCtx.progress === 'checkout' ? progressCtx.hideCheckout : null}>
      <form onSubmit={handleSubmit}>
        <h2>checkout</h2>
        <p>{`total amount: ${currencyFormatter.format(totalAmount)}`}</p>
        <Input label="Full name" id="fullName" />
        <Input label="Email address" id="email" type="email" />
        <Input label="street" id="street" />
        <div className="control-row">
          <Input label="postal code" id="postal-code" />
          <Input label="city" id="city" />
        </div>
        <p className="modl-actions">
          <Button textOnly onClick={progressCtx.hideCheckout} type="button">
            Close
          </Button>
          <Button>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
}
