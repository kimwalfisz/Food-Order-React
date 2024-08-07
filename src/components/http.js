export async function getAvailableMeals() {
    const response = await fetch("http://localhost:3000/meals");
    if (!response.ok) throw new Error("couldn't fetch meals");
    const resData = await response.json();
    return resData;
}

export async function postOrder(orderData) {
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        body: JSON.stringify({order: orderData}),
        headers: {'Content-Type': 'application/json'}
      });
    const resData = await response.json();
    if (!response.ok) {
        console.log(response);
        throw new Error(resData.message);
    }
    else return resData;
}