const totalPrice = (items) => {
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return totalPrice;
};
export { totalPrice };
