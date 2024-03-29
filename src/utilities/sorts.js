/**
 * sắp xếp các mảng
 */

export const mapOrder = (array, order, key) => {
  if (!array || !order || !key) {
    return []
  }
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
  return array
}
