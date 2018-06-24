import { createSelector } from 'reselect'
import reduce from 'lodash/reduce'

export const orderSelector = createSelector(
  ({ order }) => order,
  ({ items, order, quantities }) => {
    const total = reduce(
      quantities,
      (sum, quantity, itemId) => {
        const item = items[itemId]
        return sum + item.price * quantity
      },
      0,
    )

    return { items: order.map(itemId => items[itemId]), quantities, total }
  },
)
