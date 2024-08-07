import { useEffect, useState } from "react";
import { getAvailableMeals } from "./http.js";
import MealItem from "./MealItem.jsx";

export default function Shop() {
  const [availableMeals, setAvailableMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const meals = await getAvailableMeals();
        setAvailableMeals(meals);
      } catch (error) {}
    }
    fetchData();
  }, []);

  if (availableMeals.length === 0) {
    return <p>Loading meals...</p>;
  }

  return (
    <div id="meals">
      {availableMeals.map((meal) => (
        <MealItem key={meal.id} mealData={meal} />
      ))}
    </div>
  );
}
