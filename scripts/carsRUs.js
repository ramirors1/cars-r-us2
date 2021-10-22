import { chosenPaint } from "./paint.js"
import { chosenInterior } from "./interior.js"
import { Orders } from "./orders.js"
import { chosenTechnology } from "./technology.js"
import { addCustomOrder } from "./database.js"
import { chosenWheel } from "./wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars R Us: Build your next ride.</h1>
        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${chosenPaint()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${chosenInterior()}
            </section>
            <section class="choices__technologies options">
                <h2>Technoloties</h2>
                ${chosenTechnology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${chosenWheel()}
            </section>
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}