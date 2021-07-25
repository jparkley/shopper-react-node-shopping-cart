import { formatCurrencyString } from "use-shopping-cart"

export default function formatPrice(product) {
  console.log(product)
  return formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: navigator.language
  })
}
