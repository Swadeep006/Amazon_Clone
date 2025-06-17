
export const cart = [];
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === item.productId) {
      matchingItem = cartItem;
    }
  });
  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  let quantity = quantitySelector.value;
  quantity = Number(quantitySelector.value);
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}