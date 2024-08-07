import Button from "../UI/Button";
import { CartContext } from "../store/cart-context.jsx";
import { useContext } from "react";
import { currencyFormatter } from "../util/formatting.js";

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>{`${item.name} - ${item.count} X ${currencyFormatter.format(
        item.price
      )}`}</p>
      <p className="cart-item-actions">
        <button onClick={() => cartCtx.changeItemCount(item.id, 1)}>+</button>
        <span>{item.count}</span>
        <button onClick={() => cartCtx.changeItemCount(item.id, -1)}>-</button>
      </p>
    </li>
  );
}
