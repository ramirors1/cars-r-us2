import { carsRUs } from "./carsRUs.js"

const mainContainer = document.querySelector("#container")

export const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})