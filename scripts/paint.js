import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paint") {
            setPaint(parseInt(event.target.value))  //stores the user's choice in the database
        }
    }
)

export const chosenPaint = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = paints.map(
        (paint) => {
            return `<li>
                <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
            </li>`
        }
    )
    html += listItemsArray.join("")
    html += "</ul>"

    return html
}

// let html = "<ul>"
// html += `<select id="resource">
// <option value="0">Select a Paint Color...</option>
// `
// // Use .map() for converting objects to <li> elements
// const listItemsArray = paints.map(
//     (paint) => {
       
//    html += `<option value="${paint.id}" > ${paint.color}</option>  ` 

//         // return `<li>
//         //     <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
//         // </li>`
//     }
// )
// html += 
// `</select>`
