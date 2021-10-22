import { getOrders } from "./database.js";
import { getPaints } from "./database.js";
import { getInteriors } from "./database.js";
import { getTechnologies } from "./database.js";
import { getWheels } from "./database.js";

const buildOrderListItem = (order) => {
  //     return `<li>
  //         Order #${order.id} was placed on ${order.timestamp}
  //     </li>`
  const paints = getPaints();

  // Remember that the function you pass to find() must return true/false
  const foundPaint = paints.find((paint) => {
    return paint.id === order.paintId;
  });
  let totalCost = foundPaint.price;

  const interiors = getInteriors();

  // Remember that the function you pass to find() must return true/false
  const foundInteriors = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });
  totalCost += foundInteriors.price;

  const technologies = getTechnologies();

  // Remember that the function you pass to find() must return true/false
  const foundTechnology = technologies.find((technology) => {
    return technology.id === order.technologyId;
  });
  totalCost += foundTechnology.price;

  const wheels = getWheels();

  // Remember that the function you pass to find() must return true/false
  const foundWheel = wheels.find((wheel) => {
    return wheel.id === order.wheelId;
  });
  totalCost += foundWheel.price;

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `<li>  
    Order #${order.id} with a cost ${costString} was place on ${Date()}
</li>`;
}

export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};
