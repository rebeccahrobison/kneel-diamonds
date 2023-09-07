import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

export const PlaceOrderButton = () => {
    document.addEventListener("click", handlePlaceOrder)

    return `<article class="order">
        <button id="placeOrder">Create Custom Order</button>
    </article>`
}