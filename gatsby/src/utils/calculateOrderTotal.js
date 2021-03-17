import calculatePrice from './calculatePrice';
import formatMoney from './formatMoney';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runningTotal + calculatePrice(pizza.price, singleOrder.size);
  }, 0);
}
