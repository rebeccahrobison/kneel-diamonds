import { MetalOptions } from "./MetalOptions.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { PlaceOrderButton } from "./PlaceOrder.js"
import { Orders } from "./OrdersList.js"
import { jewelryOptionOptions } from "./JewelryOptions.js"

const container = document.querySelector('#container')

const render = async () => {
    const metalsHTML = await MetalOptions()
    const sizesHTML = await SizeOptions()
    const stylesHTML = await StyleOptions()
    const buttonHTML = PlaceOrderButton()
    const ordersHTML = await Orders()
    const jewelriesHTML = await jewelryOptionOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesHTML}
            </section>
        </article>

        <article class="jewelryChoices">
            ${jewelriesHTML}
        </article>

        <article class="order">
        ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    
    render()

})

render()