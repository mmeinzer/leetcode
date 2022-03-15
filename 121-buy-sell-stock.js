/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestPrice;
  let bestProfit = 0;

  prices.forEach((price) => {
    if (lowestPrice === undefined) {
      lowestPrice = price;
    }

    if (price - lowestPrice > bestProfit) {
      bestProfit = price - lowestPrice;
    }
  });

  return bestProfit;
};
