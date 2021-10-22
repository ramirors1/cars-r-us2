const database = {
    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 950 }
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 405 },
        { id: 2, interior: "Charcoal Fabric", price: 782 },
        { id: 3, interior: "White Leather", price: 1470 },
        { id: 4, interior: "Black Leather", price: 1997 },
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 500 },
        { id: 2, technology: "Navigation Package", price: 700 },
        { id: 3, technology: "Visibitiliy Package", price: 1200 },
        { id: 4, technology: "Ultra Package", price: 1500 },
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 500 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 700 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 1200 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 1500 },
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: [{
        id: {},
        paintId: {},
        interiorId: {},
        technologyId: {},
        wheelId: {}
    }]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const setPaint = (id) => {   //add the paintId property to the orderBuilder object suing dot notation / tracks what the user clicked on when they choose a paint
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()
  
    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}