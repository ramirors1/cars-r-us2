import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()  //State variable (copy of the data)

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "wheel") {
            // window.alert(`User chose wheel ${event.target.value}`)
            setWheel(parseInt(event.target.value))
        }
    }
)

export const chosenWheel = () => {  //Iterate over the copy of the wheels object array
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {
        html += `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
    }

    html += "</ul>"
    return html
}