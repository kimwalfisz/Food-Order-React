import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import Button from "../UI/Button";
import { CartContext } from "../store/cart-context.jsx";

export default function MealItem({ mealData }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${mealData.image}`}></img>
        <div>
          <h3>{mealData.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealData.price)}
          </p>
          <p className="meal-item-description">{mealData.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => addToCart(mealData)}>add to cart</Button>
        </p>
      </article>
    </div>
  );
}
