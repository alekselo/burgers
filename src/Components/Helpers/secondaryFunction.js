export const formatCurrency = (item) => {
  return item.toLocaleString('ru-Ru', {style: 'currency', currency: "RUB"});
};


export const totalPriceItems = order => order.price * order.count;