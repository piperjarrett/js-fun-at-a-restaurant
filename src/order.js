function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  }
}

function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < refundOrder.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice(i,1)
    }
  }
}
function listItems(deliveryOrders) {
  var item = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    item.push(deliveryOrders[i].item)
}
  return item.join(', ')
}
function searchOrder(deliveryOrders, order) {
//console.log(deliveryOrders.length)
var inList = false
for (var i = 0; i < deliveryOrders.length; i++) {
if (deliveryOrders[i].item === order)
 inList = true

}
return inList
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
