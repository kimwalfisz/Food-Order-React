import { createContext, useReducer } from "react";

function cartReducer(state, action) {
    if (action.type === 'ADD_MEAL') {
        const updatedItems = JSON.parse(JSON.stringify(state.items));
        const idx = updatedItems.findIndex((meal) => meal.id === action.payload.id);
        if (idx === -1) updatedItems.push({ ...action.payload, count: 1 });
        else updatedItems[idx].count += 1;
        return {items: updatedItems}
    }
    else if (action.type === 'CHANGE_COUNT') {
        const updatedItems = JSON.parse(JSON.stringify(state.items));
        const idx = updatedItems.findIndex((meal) => meal.id === action.payload.id);
        const newCount = updatedItems[idx].count + action.payload.change;
        if (newCount === 0) updatedItems.splice(idx, 1);
        else updatedItems[idx].count = newCount;
        return {items: updatedItems};
    }
    else if (action.type === 'RESET_CART') {
        return {items: []};
    }
    return state;
}

export const CartContext = createContext({
    items: [],
    resetCart: () => {},
    addToCart: () => {},
    changeItemCount: () => {}
});

export default function CartContextProvider({children}) {

    const [cartState, dispatchCart] = useReducer(cartReducer, { items: [] });

    function handleAddToCart(mealData) {
        dispatchCart({
            type: 'ADD_MEAL',
            payload: mealData
        }); 
    }
    function handleChangeCount(id, change) {
      dispatchCart({
        type: 'CHANGE_COUNT',
        payload: {id, change}
      })
    }
    function handleResetCart() {
        dispatchCart({type: 'RESET_CART'});
    }

    const ctxValue = {
        items: cartState.items,
        resetCart: handleResetCart,
        addToCart: handleAddToCart,
        changeItemCount: handleChangeCount
      }
    return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}
